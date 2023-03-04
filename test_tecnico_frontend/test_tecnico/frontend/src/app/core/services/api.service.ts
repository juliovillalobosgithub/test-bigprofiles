import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retrive } from 'src/app/shared/interfaces/retrive.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRetrive(dates: string[]): Observable<Retrive> {
    let params = new HttpParams();
    params = params.append('date_from', dates[0]);
    params = params.append('date_to', dates[1]);
    return this.http.get<Retrive>(
      `/api/v1/retrieve`,
      { params: params }
    );
  }

}
