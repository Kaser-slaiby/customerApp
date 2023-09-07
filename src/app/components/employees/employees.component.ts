import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any;
  employee = new Employee();

  constructor(private dataService:DataService) {}

  ngOnInit(): void{
    this.getEmployeesData();
  }


  getEmployeesData() {
   this.dataService.getData().subscribe(res => {
    this.employees = res; 
  });
  }

  insertData() {
    this.dataService.insertData(this.employee).subscribe(res => {
    this.getEmployeesData();
  })
  }
}
