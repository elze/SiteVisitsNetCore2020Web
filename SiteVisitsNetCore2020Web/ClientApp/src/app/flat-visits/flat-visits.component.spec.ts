import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatVisitsComponent } from './flat-visits.component';

describe('FlatVisitsComponent', () => {
  let component: FlatVisitsComponent;
  let fixture: ComponentFixture<FlatVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
