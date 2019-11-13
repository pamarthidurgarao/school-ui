import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(private http: HttpClient) { }
  
  public getJson(): Observable<any> {
    return this.http.get("./assets/json/data.json");
  }
}
