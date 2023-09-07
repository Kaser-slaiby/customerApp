import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Route } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';

const appRoutes: Routes = [
  { path: '' , component:EmployeesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
