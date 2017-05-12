import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  Provider for interact with Http request
*/
@Injectable()
export class HttpProvider {

  /**
   * HTTP provider injecting
   * @param http
   */
  constructor(private http: Http) {
  }

  /**
   * Data from server getting
   * @param city
   * @returns {Observable<R>}
   */
  getJsonData(film_id: string = "") {
    return this.http.get(`http://www.omdbapi.com/?plot=full&i=${film_id}`).map(res => res.json());
  }
}
