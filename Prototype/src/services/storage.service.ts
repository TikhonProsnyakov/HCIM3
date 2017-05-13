import {Injectable} from "@angular/core";



@Injectable()
export class StorageService {

  history: any[] = [];
  watchlist: any[] = [];

  constructor(){
  }

  pushWatchList(id: string, name: string, poster: string){
    this.watchlist.push({name: name, id: id, poster: poster});
  }

  pushHistory(id: string, name: string, poster: string){
    if (!this.history.some(film => film.id == (id))){
      this.history.push({name: name, id: id, poster: poster});
    };
  }

  getWatchList(){
    return this.watchlist;
  }

  getHistory(){
    return this.history;
  }


  isAddedToWatchlist(id: string): boolean{
    for(let item of this.watchlist){
      if(item.id === id) return true;
    }
    return false;
  }

  removeFromWatchlist(id: string){
    this.watchlist = this.watchlist.filter((item) => item.id !== id);
  }
}
