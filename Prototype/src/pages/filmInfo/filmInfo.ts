import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  templateUrl: 'filmInfo.html',
  selector: 'page-filmInfo'
})

export class FilmInfoPage {

  id: string;
  imdb: any;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.id = navParams.get('id');
  }

}
