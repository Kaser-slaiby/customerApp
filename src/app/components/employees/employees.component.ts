import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any;

  constructor(private dataService:DataService) {}

  ngOnInit(): void{
    this.getEmployeesData();
  }


  getEmployeesData() {
   this.dataService.getData().subscribe(res => {
    this.employees = res; 
   });
  }

}
