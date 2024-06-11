import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcMediaCardImageComponent } from './adc-media-card-image.component';

describe('AdcMediaCardImageComponent', () => {
  let component: AdcMediaCardImageComponent;
  let fixture: ComponentFixture<AdcMediaCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdcMediaCardImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdcMediaCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
