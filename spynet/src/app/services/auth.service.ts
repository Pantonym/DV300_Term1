import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // influences our behavior across all components
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  // http url
  private loginURL = "http://localhost:3000/users/login";

  // login function
  loginUser(email: string, password: string): Observable<boolean> {
    // make the http request, receive the response of user info, save the user info to the session storage
    return this.http.post<any>(this.loginURL, { email, password }).pipe( //create a pipeline of things that need to happen whenever the function completes

      tap(response => {

        if (response) {
          // set our session storage
          sessionStorage.setItem('user', JSON.stringify(response));
          this.isLoggedIn.next(true); //set the state to true
        }

      })

    );
  }

  // log out function
  logOut() {
    sessionStorage.removeItem("user");
    this.isLoggedIn.next(false); //set the state to false
  }

  // If there is a user logged in, change the variable to true. If not, change it to false.
  checkCurrentUserLoggedIn(): boolean {
    // DIDN'T USE user model, but it is recommended that we do(so we can avoid using JSON.parse and having type errors)
    var user = JSON.parse(sessionStorage.getItem("user")!);

    if (user) {
      this.isLoggedIn.next(true);
      return true;
    } else {
      this.isLoggedIn.next(false);
      return false;
    }

  }

  // check if a user is logged in function - for UI
  checkIfLoggedIn(): Observable<boolean> {

    this.checkCurrentUserLoggedIn();

    return this.isLoggedIn.asObservable();

  }

  // check if a user is admin function
  isUserAdmin() {
    var user = JSON.parse(sessionStorage.getItem("user")!);

    if (user) {

      if (user.isAdmin == true) {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }

  // returns user data from the sessions storage
  getCurrentUser(): any {
    var user = JSON.parse(sessionStorage.getItem("user")!);

    return user;
  }
}