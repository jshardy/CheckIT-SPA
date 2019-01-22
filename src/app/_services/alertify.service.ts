import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
// This is so we can get by tslint errors.
//declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) 
  {
    // clear alert message on route change
      router.events.subscribe(event => 
      {
        if (event instanceof NavigationStart) 
        {
            if (this.keepAfterNavigationChange) 
            {
                // only keep for a single location change
                this.keepAfterNavigationChange = false;
            } 
            else 
            {
                // clear alert
                this.subject.next();
            }
        }
      });
  }

  success(message: string, keepAfterNavigationChange = false) 
  {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) 
  {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> 
  {
      return this.subject.asObservable();
  }


  // confirm(message: string, okCallback: () => any) {
  //   alertify.confirm(message, function (e) {
  //     // e represents the user clicking ok
  //     if (e) {
  //       okCallback();
  //     } else { }
  //   });
  // }

  // success(message: string) {
  //   alertify.success(message);
  // }

  // error(message: string) {
  //   alertify.error(message);
  // }

  // warning(message: string) {
  //   alertify.warning(message);
  // }

  // message(message: string) {
  //   alertify.message(message);
  // }

}

