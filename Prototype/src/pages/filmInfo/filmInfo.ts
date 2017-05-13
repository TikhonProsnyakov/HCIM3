import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';
import {StorageService} from "../../services/storage.service";

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
  isAdded: boolean = false;

  /**
   *
   * @param navCtrl
   * @param navParams nimmt Parameter id aus HomePage
   */
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpProvider:HttpProvider,
              private _storage: StorageService) {
    this.id = this.navParams.get('id');
    this.detailedView = false;
    this.httpProvider.getJsonData(this.id).subscribe(
      result => {
        this.Data = result;
      },
      err => console.error("Error : "+err)//,
      //() => this.loading.dismiss()
    );

    this.isAdded = this._storage.isAddedToWatchlist(this.id);
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
  public addToWatchlist(name: string, id: string, poster: string) {
    this.isAdded = true;
    this._storage.pushWatchList(this.id, name, poster);
  }
  public deleteFromWatchlist(){
    this.isAdded = false;
    this._storage.removeFromWatchlist(this.id);
  }
}
