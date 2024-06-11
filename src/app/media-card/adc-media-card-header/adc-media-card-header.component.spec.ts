import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcMediaCardHeaderComponent } from './adc-media-card-header.component';

describe('AdcMediaCardHeaderComponent', () => {
  let component: AdcMediaCardHeaderComponent;
  let fixture: ComponentFixture<AdcMediaCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdcMediaCardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdcMediaCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
