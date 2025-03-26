import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranConnexionComponent } from './ecran-connexion.component';

describe('EcranConnexionComponent', () => {
  let component: EcranConnexionComponent;
  let fixture: ComponentFixture<EcranConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
