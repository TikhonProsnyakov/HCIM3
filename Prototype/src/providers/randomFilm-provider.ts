import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class RandomFilmProvaider{

  constructor(private http: Http){}

  public getJsonData(){
    return this.http.get('assets/someFilms.json').map(res => res.json());
  }

}
