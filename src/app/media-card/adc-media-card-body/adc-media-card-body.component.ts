import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adc-media-card-body',
  templateUrl: './adc-media-card-body.component.html',
  styleUrl: './adc-media-card-body.component.css'
})
export class AdcMediaCardBodyComponent {
  @Input() body?:string

}
