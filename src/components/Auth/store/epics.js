import { Http } from "../../../services/Http";
import { catchError, switchMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import {
    USER_ACCOUNT,
    fetchUserAccountSuccess,
    fetchUserAccountFailure,
    USER_ACCOUNT_UPDATE,
    updateUserAccountSuccess,
    updateUserAccountFailure,
} from "./actions";

export const fetchUserAccountEpic = action$ =>
    action$.pipe(
        ofType(USER_ACCOUNT),
        switchMap(action => {
            const { username, password } = action.payload;
            return Http.userValidate(username, password).pipe(
                map(user => {
                    return fetchUserAccountSuccess(user.data);
                }),
                catchError(error => {
                    return of(fetchUserAccountFailure(error.message));
                })
            );
        })
    );

export const updateUserAccountEpic = action$ =>
    action$.pipe(
        ofType(USER_ACCOUNT_UPDATE),
        switchMap(action => {
            const { username, password, data } = action.payload;
            return Http.updateUserAccount(username, password, data).pipe(
                map(user => updateUserAccountSuccess(user.data, data)),
                catchError(error =>
                    Observable.of(updateUserAccountFailure(error.message))
                )
            );
        })
    );
