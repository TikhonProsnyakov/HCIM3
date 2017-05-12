/**
 * Created by tihonprosnakov on 11/05/2017.
 */
import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {WatchlistPage} from "../watchlist/watchlist";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WatchlistPage;

  constructor (){

  }
}
