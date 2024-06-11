import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css',
})
export class MediaCardComponent {
  @Input() landscape: boolean = false;
  containerType: string = '';

}
