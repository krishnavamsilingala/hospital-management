import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PhysicianComponent } from './physician/physician.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { CreatePhysicianComponent } from './create-physician/create-physician.component';
import { ViewPhysicianComponent } from './view-physician/view-physician.component';
import { UpdatePhysicianComponent } from './update-physician/update-physician.component';
import { DepartmentComponent } from './department/department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CanActivateRouteGuard} from './can-activate-guard';


const routes: Routes = [
  {
    path:'login',//path is http:localhost:4200/login
    component:LoginPageComponent
  },
{
  path: 'patients',
  component: PatientComponent,
  canActivate:[CanActivateRouteGuard],
  children: [
        { path: 'create', component: CreatePatientComponent },
        { path: 'view', component: ViewPatientComponent },
        // Other patient-related routes...
         { path: '', redirectTo: 'view', pathMatch: 'full' } // Redirect to 'view' by default
      ]

},
      {
      path: 'physicians',
      component: PhysicianComponent,
      canActivate:[CanActivateRouteGuard],
        children: [
              { path: 'create', component: CreatePhysicianComponent },
              { path: 'view', component: ViewPhysicianComponent },
              { path: 'update', component: UpdatePhysicianComponent },

              // Other patient-related routes...
              { path: '', redirectTo: 'view', pathMatch: 'full' } // Redirect to 'view' by default
            ]
      },
      {
            path: 'appointments',
            component: AppointmentComponent,
            canActivate:[CanActivateRouteGuard],
              children: [
                    { path: 'create', component: CreateAppointmentComponent },
                    { path: 'view', component: ViewAppointmentComponent },
                    { path: 'update', component: UpdateAppointmentComponent },

                    // Other patient-related routes...
                    { path: '', redirectTo: 'view', pathMatch: 'full' } // Redirect to 'view' by default
                  ]
            },
      { path: 'patients/create-patient', component: CreatePatientComponent },
      { path: 'patients/update-patient', component: UpdatePatientComponent },
      ,
            {
            path: 'departments',
            component: DepartmentComponent,
            canActivate:[CanActivateRouteGuard],
              children: [
                    { path: 'create', component: CreateDepartmentComponent },
                    { path: 'view', component: ViewDepartmentComponent },
                    { path: 'update', component: UpdateDepartmentComponent },

                    // Other patient-related routes...
                    { path: '', redirectTo: 'view', pathMatch: 'full' } // Redirect to 'view' by default
                  ]
            },
        {
          //by default we are opening login
              path:'',
              redirectTo:'login',
              pathMatch:'full'
        }
      //{ path: '', redirectTo: '/patients', pathMatch: 'full' }
      // Default to patients
//       { path: '**', redirectTo: '/patients' }, // Redirect any other route to patients

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
