import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineNotificationComponent } from './inline-notification.component';

describe('InlineNotificationComponent', () => {
  let component: InlineNotificationComponent;
  let fixture: ComponentFixture<InlineNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
