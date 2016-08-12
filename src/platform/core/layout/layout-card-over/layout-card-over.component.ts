import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'td-layout-card-over',
  styleUrls: [ 'layout-card-over.component.css' ],
  templateUrl: 'layout-card-over.component.html',
})
export class TdLayoutCardOverComponent {

  /**
   * title in card
   */
  @Input('title') title: string;

  /**
   * subtitle in card
   */
  @Input('subtitle') subtitle: string;

}
