import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranAProposDeNousComponent } from './ecran-a-propos-de-nous.component';

describe('EcranAProposDeNousComponent', () => {
  let component: EcranAProposDeNousComponent;
  let fixture: ComponentFixture<EcranAProposDeNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranAProposDeNousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranAProposDeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
