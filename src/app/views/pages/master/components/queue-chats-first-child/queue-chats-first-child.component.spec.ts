import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueChatsFirstChildComponent } from './queue-chats-first-child.component';

describe('QueueChatsFirstChildComponent', () => {
  let component: QueueChatsFirstChildComponent;
  let fixture: ComponentFixture<QueueChatsFirstChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueChatsFirstChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueChatsFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
