import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { AdcMediaCardContainerComponent } from './media-card/adc-media-card-container/adc-media-card-container.component';
import { AdcMediaCardImageComponent } from './media-card/adc-media-card-image/adc-media-card-image.component';
import { AdcMediaCardHeaderComponent } from './media-card/adc-media-card-header/adc-media-card-header.component';
import { AdcMediaCardBodyComponent } from './media-card/adc-media-card-body/adc-media-card-body.component';
import { AdcMediaCardFooterComponent } from './media-card/adc-media-card-footer/adc-media-card-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaCardComponent,
    AdcMediaCardContainerComponent,
    AdcMediaCardImageComponent,
    AdcMediaCardHeaderComponent,
    AdcMediaCardBodyComponent,
    AdcMediaCardFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
