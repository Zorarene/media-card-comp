import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adc-media-card-footer',
  templateUrl: './adc-media-card-footer.component.html',
  styleUrl: './adc-media-card-footer.component.css'
})
export class AdcMediaCardFooterComponent {
  @Input() padding: boolean = false;

}
