import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcMediaCardContainerComponent } from './adc-media-card-container.component';

describe('AdcMediaCardContainerComponent', () => {
  let component: AdcMediaCardContainerComponent;
  let fixture: ComponentFixture<AdcMediaCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdcMediaCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdcMediaCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
