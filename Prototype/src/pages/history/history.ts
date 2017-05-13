import {Component, OnInit, AfterContentInit, OnChanges} from "@angular/core";
import {StorageService} from "../../services/storage.service";
import {NavController} from "ionic-angular";
import {FilmInfoPage} from "../filmInfo/filmInfo";

@Component({
  templateUrl: 'history.html'
})

export class HistoryPage {

  constructor(private _storage: StorageService, private navCntl: NavController){
  }

  showInfo(id: string){
    this.navCntl.push(FilmInfoPage, {id: id });
  }
}
