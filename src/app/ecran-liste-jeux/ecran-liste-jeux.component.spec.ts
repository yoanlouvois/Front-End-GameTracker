import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranListeJeuxComponent } from './ecran-liste-jeux.component';

describe('EcranListeJeuxComponent', () => {
  let component: EcranListeJeuxComponent;
  let fixture: ComponentFixture<EcranListeJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranListeJeuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranListeJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
