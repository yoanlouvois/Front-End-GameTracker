import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranInscriptionComponent } from './ecran-inscription.component';

describe('EcranInscriptionComponent', () => {
  let component: EcranInscriptionComponent;
  let fixture: ComponentFixture<EcranInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
