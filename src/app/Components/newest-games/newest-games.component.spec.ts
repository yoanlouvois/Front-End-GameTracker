import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestGamesComponent } from './newest-games.component';

describe('NewestGamesComponent', () => {
  let component: NewestGamesComponent;
  let fixture: ComponentFixture<NewestGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewestGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
