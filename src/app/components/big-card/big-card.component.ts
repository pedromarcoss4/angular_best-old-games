import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover:string=""
  @Input()
  description:string=""
  @Input()
  header:string=""
  @Input()
  Id:string="0"


}
