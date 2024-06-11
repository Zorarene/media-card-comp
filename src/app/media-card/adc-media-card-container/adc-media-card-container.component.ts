import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-adc-media-card-container',
  templateUrl: './adc-media-card-container.component.html',
  styleUrl: './adc-media-card-container.component.css'
})
export class AdcMediaCardContainerComponent {

  @Input() containerType: string = '';
  @Input() bounded:string ='';
}
