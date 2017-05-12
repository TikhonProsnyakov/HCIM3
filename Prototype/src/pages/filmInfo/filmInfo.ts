import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  templateUrl: 'filmInfo.html',
  selector: 'page-filmInfo'
})
/**
 * Seite mit Informationen über den erkannten Film
 */
export class FilmInfoPage {

  id: string;

  /**
   *
   * @param navCtrl
   * @param navParams nimmt Parameter id aus HomePage
   */
  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.id = navParams.get('id');
  }

}
