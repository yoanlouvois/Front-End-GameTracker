import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranAccueil } from './ecran-accueil';

describe('NewComponentComponent', () => {
  let component: EcranAccueil;
  let fixture: ComponentFixture<EcranAccueil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranAccueil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranAccueil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
