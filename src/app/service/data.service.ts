import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  getData() {
    return this.httpClient.get('http://127.0.0.1/laravel_api/public/api/employees');
  
  }

  
  insertData(data: Employee) {
    return this.httpClient.post('http://127.0.0.1/laravel_api/public/api/addemployee', data);
  }

  deleteData(id: string | number) {
    return this.httpClient.delete('http://127.0.0.1/laravel_api/public/api/deleteemployee/'+id);

  }

  getEmployeeById(id: string){
    return this.httpClient.get('http://127.0.0.1/laravel_api/public/api/employee/'+id);

  }

  updateData(id: any, data: Employee) {
    return this.httpClient.put('http://127.0.0.1/laravel_api/public/api/updateemployee'+id, data);
  }
}
