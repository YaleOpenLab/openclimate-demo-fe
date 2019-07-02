
import * as axios from 'axios';
import { from } from 'rxjs';
// import { map, mergeMap } from 'rxjs/operators';
// import { sha3_512 } from 'js-sha3';

export class Http {
  // static investorInvest(id, amount) {
  //   return this.get('investor/invest', {
  //     username: Storage.get('username'),
  //     pwhash: Storage.get('token'),
  //     seedpwd: "x",
  //     projIndex: id,
  //     amount: amount,
  //   }).pipe(
  //     map(response => {
  //       if (response.data && response.data.Code && response.data.Code === 404) {
  //         throw new Error('Transaction failed.');
  //       }

  //       return response;
  //     })
  //   )
  // }

  // static userRegister(name, username, pwd) {
  //   const data = {name: name, username: username, pwd: pwd, seedpwd: "x"};
  //   return this.get('user/register', data).pipe(
  //     mergeMap(() => this.get('investor/register', data)),
  //     mergeMap(() => this.get('recipient/register', data))
  //   );
  // }

  // static userValidate(username, password) {
  //   if (password === Storage.get('token')) {
  //     password = Storage.get('password');
  //   }
  //   const hash = sha3_512(password);
  //   return this.get('user/validate', {
  //     username: username,
  //     pwhash: hash
  //   }).pipe(map(value => {
  //     const entity = value.data && value.data.Entity ? value.data.Entity : null;
  //     Storage.set('name', entity && entity.U && entity.U.Name ? entity.U.Name : 'User');
  //     Storage.set('token', hash);
  //     Storage.set('username', username);
  //     Storage.set('password', password);
  //     return value;
  //   }));
  // }

  // static updateUserAccount(username, pwhash, data) {
  //   let userInfo = {
  //     username: username,
  //     pwhash: pwhash
  //   };
  //   let additionalParams = data;
  //   return this.get('user/update', {...userInfo, ...additionalParams});
  // }

  // static userAskXlm(username, hash) {
  //   return this.get('user/askxlm', {
  //     username: username ? username : Storage.get('username'),
  //     pwhash: hash ? hash : Storage.get('token'),
  //   })
  // }

  // static projectAll(type) {
  //   return this.get('project/all').pipe(
  //     // filter out empty projects
  //     map(result => result.data.filter(data => !!data.Name)),
  //     // TODO: fix when type is defined
  //     map(data => {
  //       if (!type || type === 'pv-solar') {
  //         return data;
  //       } else {
  //         // Return empty array for now to display empty content in other type projects
  //         return [];
  //       }
  //     })
  //   );
  // }

  // static originatorGet(id) {
  //   return this.get('public/user', {index: id});
  // }

  // static projectGet(id) {
  //   return this.get('project/get', {index: id});
  // }

  // static investorValidate() {
  //   return this.get('investor/validate', {
  //     username: Storage.get('username'),
  //     pwhash: Storage.get('token')
  //   });
  // }

  // static investorRegister(name, username, pwd, seedpwd) {
  //   return this.get('investor/register', {
  //     name: name,
  //     username: username,
  //     pwd: pwd,
  //     seedpwd: seedpwd
  //   });
  // }

  // static recipientRegister(name, username, pwd, seedpwd) {
  //   return this.get('recipient/register', {
  //     name: name,
  //     username: username,
  //     pwd: pwd,
  //     seedpwd: seedpwd
  //   });
  // }

  static amandaValidate() {
    return this.get('recipient/validate', {
      username: 'amanda' ,//Storage.get('username'), // todo remove this
      pwhash: '9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758'
    });
  }

  // static testData(){
  //   return this.get('ping');
  // }

  static get(path, data) {
    return from(
      axios({
        method: 'GET',
        url: `https://api.openx.solar/${path}`,
        params: data,
        headers: {
          'Content-Type': 'application/x-www-form/urlencoded'
        }
      })
    );
  }
}

export default Http;