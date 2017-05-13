import {Component, OnInit, AfterContentInit, OnChanges} from "@angular/core";
import {StorageService} from "../../services/storage.service";
import {NavController} from "ionic-angular";
import {FilmInfoPage} from "../filmInfo/filmInfo";

@Component({
  templateUrl: 'watchlist.html'
})

export class WatchlistPage  {

  constructor(private _storage: StorageService, private navCntl: NavController){
  }

  showInfo(id: string){
    this.navCntl.push(FilmInfoPage, {id: id });
  }
}
