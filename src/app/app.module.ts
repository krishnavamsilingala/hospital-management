import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhysicianComponent,
    PatientComponent,
    CreatePatientComponent,
    ViewPatientComponent,
    UpdatePatientComponent,
    CreatePhysicianComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
