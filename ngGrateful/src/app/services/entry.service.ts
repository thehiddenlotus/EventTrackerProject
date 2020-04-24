import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Entry } from './../models/entry';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private url = environment.baseUrl + 'api/entries'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public index(){
    // const credentials = this.auth.getCredentials();
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Basic ${credentials}`,
    //     'X-Requested-With': 'XMLHttpRequest'
    //   })
    // };
    // if(this.auth.checkLogin()){
      return this.http
                .get<Entry[]>(this.url)
                .pipe(
                  catchError((err: any) => {
                    console.log(err);
                    return throwError('Error in Service.index');
                  })
                );
    // } else {
    //   this.router.navigateByUrl('login')
    // }
  }

  public create(entry: Entry){
    // const credentials = this.auth.getCredentials();
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Basic ${credentials}`,
    //     'X-Requested-With': 'XMLHttpRequest'
    //   })
    // };
    // if(this.auth.checkLogin()){
      return this.http
                  .post<Entry>(this.url, entry)
                  .pipe(
                    catchError((err: any) => {
                      console.log(err);
                      return throwError('Error in Service.create');
                    })
                  );
    // } else {
    //   this.router.navigateByUrl('login')
    // }
  }

  update(entry: Entry) {
    // const credentials = this.auth.getCredentials();
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Basic ${credentials}`,
    //     'X-Requested-With': 'XMLHttpRequest'
    //   })
    // };
    // if(this.auth.checkLogin()){
      return this.http
                  .put<Entry>(`${this.url}/${entry.id}`, entry)
                  .pipe(
                    catchError((err: any) => {
                      console.log(err);
                      return throwError('Error in Service.update');
                    })
                  );
    // } else {
    //   this.router.navigateByUrl('login')
    // }
  }

  destroy(id: number){
    // const credentials = this.auth.getCredentials();
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Basic ${credentials}`,
    //     'X-Requested-With': 'XMLHttpRequest'
    //   })
    // };
    // if(this.auth.checkLogin()){
      return this.http
                  .delete(this.url + '/' + id)
                  .pipe(
                    catchError((err: any) => {
                      console.log(err);
                      return throwError('Error in Service.destroy');
                    })
                  );
    // } else {
    //   this.router.navigateByUrl('login')
    // }
  }

  show(id){
    // const credentials = this.auth.getCredentials();
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Basic ${credentials}`,
    //     'X-Requested-With': 'XMLHttpRequest'
    //   })
    // };
    // if(this.auth.checkLogin()){
      return this.http
                  .get<Entry>(this.url + '/' + id)
                  .pipe(
                    catchError((err: any) => {
                      console.log(err);
                      return throwError('Error in Service.show');
                    })
                  );
    // } else {
    //   this.router.navigateByUrl('login')
    // }
  }
}
