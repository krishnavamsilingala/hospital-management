import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { PhysicianComponent } from './physician/physician.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { CreatePhysicianComponent } from './create-physician/create-physician.component';


const routes: Routes = [
//   {
//     path:'dashboard',
//     component: DashboardComponent
//   },
//   {
//       path:'',
//       component: DashboardComponent
//   },
{
  path: 'patients',
  component: PatientComponent,
  children: [
        { path: 'create', component: CreatePatientComponent },
        { path: 'view', component: ViewPatientComponent },
        // Other patient-related routes...
//         { path: '', redirectTo: 'view', pathMatch: 'full' } // Redirect to 'view' by default
      ]

},
      {
      path: 'physicians',
      component: PhysicianComponent,
        children: [
              { path: 'create', component: CreatePhysicianComponent },
              { path: 'view', component: CreatePhysicianComponent },
              // Other patient-related routes...
      //         { path: '', redirectTo: 'view', pathMatch: 'full' } // Redirect to 'view' by default
            ]
      },
      { path: 'patients/create-patient', component: CreatePatientComponent },
      { path: '', redirectTo: '/patients', pathMatch: 'full' } // Default to patients
//       { path: '**', redirectTo: '/patients' }, // Redirect any other route to patients

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
