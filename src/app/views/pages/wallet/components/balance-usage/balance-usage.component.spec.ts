import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceUsageComponent } from './balance-usage.component';

describe('BalanceUsageComponent', () => {
  let component: BalanceUsageComponent;
  let fixture: ComponentFixture<BalanceUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
