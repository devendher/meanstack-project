import {Component, OnInit} from "@angular/core";
import {VehicleService} from "./vehicle.service";
import {Http} from "@angular/http";

@Component({
  selector: 'vehicle-component',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  public cars: any = [];
  public models: any = [];
  public selectedVehicle:string='';
  public selectedVehicleModel:string='';
  public modelTypes:any=[];
  public imageShow: boolean= false;

  constructor(private  vehicleService: VehicleService, private  http: Http) {
  }

  ngOnInit() {
    this.vehicleService.getData().subscribe(response => {
      console.log('response', response);
      console.log('type', typeof response);
      this.cars = response;
    }, error => {
      console.log('Error', error);
    }, () => {
      console.log('Completed')
    })
  }
  carTypeChange(event:any){
    console.log('selected Car Type',(event));
    this.selectedVehicle = event;
    this.selectedVehicleModel ='';
    this.imageShow = false;
    if(this.selectedVehicle){
      let index1 = this.cars.findIndex(item=> item.name === this.selectedVehicle);
      if(index1!==-1){
        this.modelTypes = this.cars[index1].model;
      }
    } else {
      this.selectedVehicleModel='';
      this.imageShow = false;

    }
  }
  modelChange(event:any){
    console.log('selected Car Type',(event));
    this.selectedVehicleModel = event;
    if(this.selectedVehicle && this.selectedVehicleModel){
      this.imageShow=true;
    } else {
      this.imageShow = false;
    }
  }



}
