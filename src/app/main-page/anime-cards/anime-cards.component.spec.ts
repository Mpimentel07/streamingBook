import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardsComponent } from './anime-cards.component';

describe('AnimeCardsComponent', () => {
  let component: AnimeCardsComponent;
  let fixture: ComponentFixture<AnimeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
