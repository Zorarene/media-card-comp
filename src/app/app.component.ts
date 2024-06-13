import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'media-card';
 imagePath : string = "./assets/mediacard-image.png"
 public landscape: boolean = false;



}
