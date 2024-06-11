import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adc-media-card-image',
  templateUrl: './adc-media-card-image.component.html',
  styleUrl: './adc-media-card-image.component.css'
})
export class AdcMediaCardImageComponent {
  @Input() image?:string
  @Input() type:string = ''  
  @Input() ratio:string =''
}
