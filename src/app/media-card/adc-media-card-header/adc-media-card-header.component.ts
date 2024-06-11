import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adc-media-card-header',
  templateUrl: './adc-media-card-header.component.html',
  styleUrl: './adc-media-card-header.component.css'
})
export class AdcMediaCardHeaderComponent {
  @Input() header?: string
  @Input() description?:string

}
