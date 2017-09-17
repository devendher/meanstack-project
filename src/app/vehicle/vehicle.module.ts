import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {VehicleService} from "./vehicle.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [VehicleComponent],
  providers:[VehicleService],
  exports:[VehicleComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class VehicleModule { }
