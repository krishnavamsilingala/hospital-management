import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from './../service/appointment.service';
import { Appointment } from './../model/Appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentService,private router: Router) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      patient: ['', Validators.required],
      prepnurse: ['', Validators.required],
      physician: ['', Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
      examinationroom: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.appointmentForm.valid) {
      const appointmentData: Appointment = this.appointmentForm.value as Appointment;
      // Appending a constant value of 0 to appointmentid
      const modifiedAppointmentData = { ...appointmentData, appointmentid: 0 };
      this.appointmentService.addAppointment(modifiedAppointmentData).subscribe(
        (response: any) => {
                if (response && typeof response === 'string' && response.includes('Record Created Successfully')) {
                  console.log('Appointment created successfully');
                  this.router.navigate(['appointments/view']);
                  // Handle success - show a success message or update UI
                } else {
                  console.error('Unexpected response after creating appointment:', response);
                  // Handle unexpected response scenario
                }
              },
              (error) => {
                console.error('Error creating appointment:', error);
                // Log the error details
                console.error('Error details:', error.error);
                // Handle error - show an error message or handle accordingly
              }
      );
    }
  }

  resetForm() {
    this.submitted = false;
    this.appointmentForm.reset();
  }
}
