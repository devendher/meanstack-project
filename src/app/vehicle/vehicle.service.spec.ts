import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from "@angular/http/testing";
import { fakeAsync } from "@angular/core/testing";
import { BaseRequestOptions, Http, HttpModule, RequestMethod, Response, ResponseOptions } from "@angular/http";
import { VehicleService } from './vehicle.service';
import {Observable} from "rxjs";

class MockVehicleService{
  getData(){
    let cars=[
      {
        name:'ford',
        models:[
          {name:'xyz'}
        ]
      }
    ];

    return Observable.of(cars);
  }
}
describe('VehicleService', () => {
  let vehicleService: VehicleService;
  let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {provide: VehicleService, useClass: MockVehicleService},
        VehicleService
      ],
      imports: [HttpModule]
    });
  });

  beforeEach(
    inject([VehicleService, MockBackend], (service: VehicleService, backend: MockBackend) => {
      vehicleService = service;
      mockBackend = backend;
    })
  );

  it('should be created', inject([VehicleService], (service: VehicleService) => {
    console.log('Vehicle service creataed');
    expect(service).toBeTruthy();
  }));
  it('get data from bakend for vehicle list', inject([VehicleService], (service: VehicleService) => {
    spyOn(vehicleService, 'getData');
    let cars=[
      {
        name:'ford',
        models:[
          {name:'xyz'}
        ]
      }
    ];
  }));
});
