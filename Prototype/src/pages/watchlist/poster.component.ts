import {Component, Input} from "@angular/core";

@Component({

  selector: "poster",
  templateUrl: 'poster.component.html'
})

export class PosterComponent {

  @Input() item: any = {};

  constructor(){

  }


}
