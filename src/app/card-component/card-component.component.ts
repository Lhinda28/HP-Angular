import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() receiveValue: String = "";

  @Input() imgSource: String ="";

}
