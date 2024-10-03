import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<string | null>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      setTimeout(() => {
        if (username === 'user1' && password === 'pass') {
          localStorage.setItem('currentUser', 'group1');
          this.currentUserSubject.next('group1');
          observer.next(true);
        } else if (username === 'user2' && password === 'pass') {
          localStorage.setItem('currentUser', 'group2');
          this.currentUserSubject.next('group2');
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  clearSession() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
