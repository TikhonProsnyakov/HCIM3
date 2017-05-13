import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {RandomFilmProvaider} from "../providers/randomFilm-provider";
import {HttpModule} from "@angular/http";
import {FilmInfoPage} from "../pages/filmInfo/filmInfo";
import {WatchlistPage} from "../pages/watchlist/watchlist";
import {HttpProvider} from "../providers/http-provider";
import {HistoryPage} from "../pages/history/history";
import {StorageService} from "../services/storage.service";
import {PosterComponent} from "../pages/watchlist/poster.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FilmInfoPage,
    WatchlistPage,
    HistoryPage,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FilmInfoPage,
    WatchlistPage,
    HistoryPage,
    PosterComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RandomFilmProvaider,
    HttpProvider,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [PosterComponent]
})
export class AppModule {}
