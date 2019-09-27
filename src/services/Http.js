import Storage from "./Storage";
import * as axios from "axios";
import { from, Observable, of } from "rxjs";
import { map, mergeMap, combineLatest } from "rxjs/operators";
import { sha3_512 } from "js-sha3";

const qs = require("querystring");

export class Http {

  static userValidate(username, password) {
    const hash = sha3_512(password);

    return this.post("login", {
      username: username,
      pwhash: hash
    }).pipe(
      map(value => {
        const entity = value.data && value.data ? value.data : null;
        Storage.set("token", entity.Token);
        return value;
      })
    );
  }

  /*
   * Register
   */
  static checkIfAccountNameExists(value) {
    const tempData = [
      'new york', 'new york state', 'new york & company',
    ];
    const fakeRequest = tempData.includes(value.toLowerCase());
    return of({status: fakeRequest, data: fakeRequest ? tempData : null});
  }

  static registerUser(data) {

    return this.post("register", data).pipe(
      map(value => {
        const entity = value.data && value.data ? value.data : null;
        Storage.set("token", entity.Token);
        return value;
      })
    );
  }

  static uploadFile(file) {
    return this.post("file", file).pipe(
      map(value => {
        return value;
      })
    );
  }






  static getEarthStatus() {
    return this.get("earth-states").pipe(
      map(value => {
        return value;
      })
    );
  }

  /*
   * Explore Page
   * -- Review
   */
  static getNationStates() {
    return this.get("nation-states").pipe(
      map(value => {
        return value;
      })
    );
  }

  static getExploreReviewData(path, id) {
    return this.get(`${path}/${id}`).pipe(
      map(value => {
        return value;
      })
    );
  }

  static getMultinationals() {
    return this.get("multinationals").pipe(
      map(value => {
        return value;
      })
    );
  }

  static getActors() {
    return this.get("actors").pipe(
      map(value => {
        return value;
      })
    );
  }

  static get(path, data) {
    return from(
      axios({
        method: "GET",
        url: `https://api.openclimate.earth/${path}`,
        params: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    );
  }

  static post(path, data) {
    return from(
      axios({
        method: "POST",
        url: `https://api.openclimate.earth/${path}`,
        data: qs.stringify(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    );
  }
}
