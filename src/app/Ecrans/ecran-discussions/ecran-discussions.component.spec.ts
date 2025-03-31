import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranDiscussionsComponent } from './ecran-discussions.component';

describe('EcranDiscussionsComponent', () => {
  let component: EcranDiscussionsComponent;
  let fixture: ComponentFixture<EcranDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranDiscussionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
