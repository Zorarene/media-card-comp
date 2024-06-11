import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcMediaCardBodyComponent } from './adc-media-card-body.component';

describe('AdcMediaCardBodyComponent', () => {
  let component: AdcMediaCardBodyComponent;
  let fixture: ComponentFixture<AdcMediaCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdcMediaCardBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdcMediaCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
