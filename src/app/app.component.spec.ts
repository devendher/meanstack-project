import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {Observable} from "rxjs";
import {VehicleService} from "./vehicle/vehicle.service";

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

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [{provide: VehicleService, useClass: MockVehicleService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log('AppComponent component created');
  });

});
