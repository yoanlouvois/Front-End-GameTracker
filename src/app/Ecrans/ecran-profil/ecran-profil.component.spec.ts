import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranProfilComponent } from './ecran-profil.component';

describe('EcranProfilComponent', () => {
  let component: EcranProfilComponent;
  let fixture: ComponentFixture<EcranProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
