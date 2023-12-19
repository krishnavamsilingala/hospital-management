import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PhysicianComponent } from './physician/physician.component';
import { PatientComponent } from './patient/patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { CreatePhysicianComponent } from './create-physician/create-physician.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPhysicianComponent } from './view-physician/view-physician.component';
import { UpdatePhysicianComponent } from './update-physician/update-physician.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DepartmentComponent } from './department/department.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhysicianComponent,
    PatientComponent,
    CreatePatientComponent,
    ViewPatientComponent,
    UpdatePatientComponent,
    CreatePhysicianComponent,
    LoginPageComponent,
    ViewPhysicianComponent,
    UpdatePhysicianComponent,
    CreateDepartmentComponent,
    ViewDepartmentComponent,
    UpdateDepartmentComponent,
    DepartmentComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    ViewAppointmentComponent,
    UpdateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
