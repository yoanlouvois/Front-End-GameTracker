import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranAjouterAmiComponent } from './ecran-ajouter-ami.component';

describe('EcranAjouterAmiComponent', () => {
  let component: EcranAjouterAmiComponent;
  let fixture: ComponentFixture<EcranAjouterAmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranAjouterAmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranAjouterAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
