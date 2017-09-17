import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {VehicleComponent} from "./vehicle.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {VehicleService} from "./vehicle.service";
import {Observable} from "rxjs";

class MockVehicleService {
  getData() {
    let cars = [
      {
        name: 'ford',
        models: [
          {name: 'Edge'},
          {name: 'Escape'}
        ]
      }
    ];

    return Observable.of(cars);
  }
}

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [VehicleComponent],
      providers: [{provide: VehicleService, useClass: MockVehicleService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log('Vehicle component created');
  });

  it('should show vehicle image on select of 2 dropdown boxes', () => {
    component.modelTypes=[];
    component.cars=[
      {
        name: 'ford',
        models: [
          {name: 'Edge'},
          {name: 'Escape'}
        ]
      }
    ];
    component.carTypeChange('ford');
    expect(component.imageShow).toBe(false);
    component.modelChange('Edge');
    expect(component.imageShow).toBe(true);
  });

});
