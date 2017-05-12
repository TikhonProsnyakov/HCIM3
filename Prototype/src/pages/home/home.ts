import { Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {RandomFilmProvaider} from "../../providers/randomFilm-provider";
import {FilmInfoPage} from "../filmInfo/filmInfo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
 * Home Page mit button, der Audioerkennung startet
 */
export class HomePage {

  /**
   * Array von Filmen, die in asserts/someFilms.json gespeichert sind
   * @type {Array}
   */
  films: any[] = [];

  /**
   * nimmt die Daten mittels randomFilmProvaider.
   * @param randomFilmProvaider
   * @param navCtrl
   * @param loadingCtrl
   */
  constructor(private randomFilmProvaider: RandomFilmProvaider, public navCtrl: NavController,
              public loadingCtrl:LoadingController) {

    this.randomFilmProvaider.getJsonData().subscribe((data) => {
        this.films = data.films;
      },
      err => console.error("Error : "+err)
    );

  }

  /**
   * startet "Audioerkennung". wartet 5 sekunden und puscht filmImfo Page mittles navController und gibt als Parameter
   * ein ID eines zufälligen Filmes
   */
  startListening(){
    let loading = this.loadingCtrl.create({
      content: 'recognizing...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push( FilmInfoPage, {id: this.getRandomeFilm().id });
    }, 5000);
  }

  getRandomeFilm(){
    return this.films[Math.floor(Math.random() * this.films.length)];
  }
}
