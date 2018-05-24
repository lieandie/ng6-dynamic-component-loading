import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjCopmComponent } from './inj-copm.component';

describe('InjCopmComponent', () => {
  let component: InjCopmComponent;
  let fixture: ComponentFixture<InjCopmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjCopmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjCopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
