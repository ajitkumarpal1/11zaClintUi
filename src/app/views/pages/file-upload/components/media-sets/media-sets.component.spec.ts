import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSetsComponent } from './media-sets.component';

describe('MediaSetsComponent', () => {
  let component: MediaSetsComponent;
  let fixture: ComponentFixture<MediaSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaSetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
