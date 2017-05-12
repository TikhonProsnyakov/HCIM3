import { Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {RandomFilmProvaider} from "../../providers/randomFilm-provider";
import {FilmInfoPage} from "../filmInfo/filmInfo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  films: any[] = [];

  constructor(private randomFilmProvaider: RandomFilmProvaider, public navCtrl: NavController,
              public loadingCtrl:LoadingController) {

    this.randomFilmProvaider.getJsonData().subscribe((data) => {
        this.films = data.films;
      },
      err => console.error("Error : "+err)
    );

  }
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
