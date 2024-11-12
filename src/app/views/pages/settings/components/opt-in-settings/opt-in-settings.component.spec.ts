import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInSettingsComponent } from './opt-in-settings.component';

describe('OptInSettingsComponent', () => {
  let component: OptInSettingsComponent;
  let fixture: ComponentFixture<OptInSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptInSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptInSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
