import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetRecordsService {
 

  private errorUrl = 'https://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  public getRecords(): Observable<any[]> 
  {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    
    // return this.http.get<any[]>(this.errorUrl).pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // );
  //  return this.http.get<any[]>(url);
    return this.http.get<any[]>(this.errorUrl);
  }

  // handleError(error: any) {
  //   console.log("inside error handler");
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }

  public postRecord(employee: any)
  {
    const url = 'http://dummy.restapiexample.com/api/v1/create';
    return this.http.post((url), employee);
  }

  public dropdownObjectArray() : any[]  {
return [
  {id: 1, name: 'France'},
  {id: 2, name: 'Germany'},
  {id: 3, name: 'Italy'},
  {id: 4, name: 'India'}
]

  }
}
