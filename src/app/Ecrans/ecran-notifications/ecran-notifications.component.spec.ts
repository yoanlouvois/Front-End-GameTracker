import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranNotificationsComponent } from './ecran-notifications.component';

describe('EcranNotificationsComponent', () => {
  let component: EcranNotificationsComponent;
  let fixture: ComponentFixture<EcranNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
