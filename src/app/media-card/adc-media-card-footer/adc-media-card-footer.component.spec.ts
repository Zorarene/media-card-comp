import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcMediaCardFooterComponent } from './adc-media-card-footer.component';

describe('AdcMediaCardFooterComponent', () => {
  let component: AdcMediaCardFooterComponent;
  let fixture: ComponentFixture<AdcMediaCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdcMediaCardFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdcMediaCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
