import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgCompComponent } from './tg-comp.component';

describe('TgCompComponent', () => {
  let component: TgCompComponent;
  let fixture: ComponentFixture<TgCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
