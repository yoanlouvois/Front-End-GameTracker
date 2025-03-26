import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranJeuComponent } from './ecran-jeu.component';

describe('EcranJeuComponent', () => {
  let component: EcranJeuComponent;
  let fixture: ComponentFixture<EcranJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranJeuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
