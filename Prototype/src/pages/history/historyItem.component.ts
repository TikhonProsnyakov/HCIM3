import {Component, Input} from "@angular/core";

@Component({

    selector: "history-item",
    templateUrl: 'historyItem.component.html'
})

export class HistoryItemComponent {

    @Input() item: any = {};

    constructor(){

    }


}
