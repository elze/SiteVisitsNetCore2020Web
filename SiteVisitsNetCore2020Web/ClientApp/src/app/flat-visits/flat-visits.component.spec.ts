import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppModule } from '../app.module';
import { FlatVisitsComponent } from './flat-visits.component';

describe('FlatVisitsComponent', () => {
  let component: FlatVisitsComponent;
  let fixture: ComponentFixture<FlatVisitsComponent>;

  //let store: MockStore;

  const initialState = {
    paginatedVisits: {
      result: { totalCount: 0, visits: [] },
      loading: true,
      error: null
    }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      //declarations: [FlatVisitsComponent],
      providers: [
        provideMockStore({ initialState  })
        ]
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
