import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppModule } from '../app.module';
import { VisitSessionComponent } from './visit-session.component';

describe('VisitSessionComponent', () => {
  let component: VisitSessionComponent;
  let fixture: ComponentFixture<VisitSessionComponent>;

  const initialState = {
    visitSessionBlocks: {
      dataSourceData: [],
      loading: true,
      error: null
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ VisitSessionComponent ]
      imports: [AppModule],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
