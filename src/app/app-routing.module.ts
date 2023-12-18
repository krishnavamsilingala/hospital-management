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
      { path: 'patients/create-patient', component: CreatePatientComponent },
      { path: 'patients/update-patient', component: UpdatePatientComponent },
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
