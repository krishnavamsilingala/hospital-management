import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from './../service/patient.service';
import { Patient } from './../model/Patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patientForm!: FormGroup;
  submitted = false; // Declare 'submitted' property

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      ssn: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      insuranceid: ['', Validators.required],
      pcp: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true; // Set 'submitted' to true upon form submission

    if (this.patientForm.valid) {
      const patientData: Patient = this.patientForm.value as Patient;
      this.patientService.createPatient(patientData).subscribe(
        (response) => {
          console.log('Patient created:', response);
          // Handle success - maybe show a success message or update UI
        },
        (error) => {
          console.error('Error creating patient:', error);
          // Handle error - show an error message or handle accordingly
        }
      );
    }
  }

  resetForm() {
    this.submitted = false; // Reset 'submitted' flag when resetting form
    this.patientForm.reset();
  }
}
