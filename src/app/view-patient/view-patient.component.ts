// view-patient.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patients: Patient[] = [];
  isEditing = false;
    editedPatient!: Patient;
    selectedFilter: string = 'pcp'; // Default selected filter
    pcpFilter: string = '';
    ssnAndPcpFilter: string = '';
    insuranceBySSNFilter: string = '';

    filterPatients() {
        switch (this.selectedFilter) {
          case 'pcp':
            this.patientService.filterByPCP(this.pcpFilter).subscribe((data) => {
              // Handle data received for filter by PCP
              // Assign data to patient list or manipulate as needed
              this.patients=data;
            }, (error) => {
                                     console.error('Error filtering', error);
                                     this.resetFilter();
                                   });
            break;
          case 'ssnAndPcp':
            this.patientService.filterBySSNAndPCP(this.ssnAndPcpFilter, this.pcpFilter).subscribe((data) => {
              // Handle data received for filter by SSN & PCP
              // Assign data to patient list or manipulate as needed
              this.patients=[data];
            },
                     (error) => {
                       console.error('Error filtering', error);
                       this.resetFilter();
                     });
            break;
          case 'insuranceBySSN':
            this.patientService.filterInsuranceBySSN(this.insuranceBySSNFilter).subscribe((data) => {
              // Handle data received for filter insurance by SSN
              // Assign data to patient list or manipulate as needed
              this.patients=data;
            }, (error) => {
                                     console.error('Error filtering', error);
                                     this.resetFilter();
                                   });
            break;
          default:
            break;
        }
    }
  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
      console.log(patients);
    });
  }

      public editPatient(patient: Patient) {
          this.router.navigate(['patients/update-patient', { ...patient }]);
      }

      resetFilter(){
          this.pcpFilter = '';
          this.ssnAndPcpFilter = '';
          this.insuranceBySSNFilter = '';
      this.loadPatients();
      }


}
