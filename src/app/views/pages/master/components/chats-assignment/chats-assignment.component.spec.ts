import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsAssignmentComponent } from './chats-assignment.component';

describe('ChatsAssignmentComponent', () => {
  let component: ChatsAssignmentComponent;
  let fixture: ComponentFixture<ChatsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
