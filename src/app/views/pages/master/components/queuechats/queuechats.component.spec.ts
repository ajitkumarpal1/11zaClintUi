import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuechatsComponent } from './queuechats.component';

describe('QueuechatsComponent', () => {
  let component: QueuechatsComponent;
  let fixture: ComponentFixture<QueuechatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueuechatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueuechatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
