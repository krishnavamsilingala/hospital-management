// view-appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/Appointment';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  selectedStartDate: Date ; // Date format, e.g., '2023-12-18'
  selectedRoomId: number = 0;
  selectedPhysicianId: number = 0;
  selectedPatientId: number = 0;

  constructor(private appointmentService: AppointmentService ,private router: Router ) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(appointments => {
      this.appointments = appointments;
      console.log(appointments);
    });
  }

  filterByStartDate(): void {
    this.appointmentService.getAppointmentsByStartDate(this.selectedStartDate).subscribe(appointments => {
      this.appointments = appointments;
    }, error => {
      console.error('Error filtering by start date', error);
    });
  }

  filterByRoomAndDate(): void {
    this.appointmentService.getAppointmentsByRoomAndDate(this.selectedRoomId, this.selectedStartDate).subscribe(appointments => {
      this.appointments = appointments;
    }, error => {
      console.error('Error filtering by room and date', error);
    });
  }

  filterByPhysicianAndDate(): void {
    this.appointmentService.getAppointmentsByPhysicianAndDate(this.selectedPhysicianId, this.selectedStartDate).subscribe(appointments => {
      this.appointments = appointments;
    }, error => {
      console.error('Error filtering by physician and date', error);
    });
  }

  filterPhysicianListByPatientId(): void {
    this.appointmentService.getPhysiciansByPatientId(this.selectedPatientId).subscribe(appointments => {
      this.appointments = appointments;
    }, error => {
      console.error('Error filtering physicians by patient ID', error);
    });
  }

        public editAppointment(appointment: Appointment) {
            this.router.navigate(['appointments/update', { ...appointment }]);
        }
}
