import { Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';

@Component({
  templateUrl: 'filmInfo.html',
  selector: 'page-filmInfo'
})
/**
 * Seite mit Informationen über den erkannten Film
 */
export class FilmInfoPage {

  id: string;
  Data: any[] = [];
  loading: any;
  detailedView: boolean;

  /**
   *
   * @param navCtrl
   * @param navParams nimmt Parameter id aus HomePage
   */
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpProvider:HttpProvider) {
    this.id = navParams.get('id');
    this.detailedView = false;
    this.httpProvider.getJsonData(this.id).subscribe(
        result => {
          this.Data = result;
        },
        err => console.error("Error : "+err),
        () => this.loading.dismiss()
    );

    // TODO Add to history list

  }
  public getInfoField(field_name):string {
    return this.Data[field_name];
  }
  public showMore(){
    this.detailedView = true;
  }
  public showLess() {
    this.detailedView = false;
  }
  public addToWatchlist() {
    this.id;
  }
}
