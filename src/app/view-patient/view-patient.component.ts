// view-patient.component.ts

import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
      console.log(patients);
    });
  }
}
