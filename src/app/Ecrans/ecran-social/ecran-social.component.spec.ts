import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranSocialComponent } from './ecran-social.component';

describe('EcranSocialComponent', () => {
  let component: EcranSocialComponent;
  let fixture: ComponentFixture<EcranSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
