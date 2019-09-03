import { Http } from "../../../services/Http";
import { catchError, switchMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';
import {
    LOGIN,
    fetchLoginSuccess,
    fetchLoginFailure,
} from "./actions";

export const fetchLoginEpic = action$ =>
    action$.pipe(
        ofType(LOGIN),
        switchMap(action => {
            const { username, password } = action.payload;
            return Http.userValidate(username, password).pipe(
                map(user => {
                    if (user.data.Code) {
                        return fetchLoginFailure(user.data.Status);
                    } else {
                        return fetchLoginSuccess(user.data);
                    }
                }),
                catchError(error => Observable.of(fetchLoginFailure(error.message)))
            );
        })
    );

export default fetchLoginEpic;
