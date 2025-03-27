import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranEditerProfilComponent } from './ecran-editer-profil.component';

describe('EcranEditerProfilComponent', () => {
  let component: EcranEditerProfilComponent;
  let fixture: ComponentFixture<EcranEditerProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranEditerProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranEditerProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
