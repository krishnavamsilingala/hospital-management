// appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:9092/api/appointment';

    reqHeaders = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`,
                'accept': '*/*'
              });

  constructor(private http: HttpClient) {}



  addAppointment(appointment: Appointment): Observable<string> {
    return this.http.post(`${this.baseUrl}`, appointment, { headers: this.reqHeaders, responseType: 'text' });
  }


  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}`,{ headers: this.reqHeaders });
  }

  getAppointmentsByStartDate(startdate: Date): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(`${this.baseUrl}/${startdate}`,{ headers: this.reqHeaders });
    }

    getAppointmentsByRoomAndDate(roomId: number, date: Date): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(`${this.baseUrl}/room/${roomId}/${date}`,{ headers: this.reqHeaders });
    }

    getAppointmentsByPhysicianAndDate(physicianId: number, date: Date): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(`${this.baseUrl}/physician/${physicianId}/${date}`,{ headers: this.reqHeaders });
    }

    getPhysiciansByPatientId(patientId: number): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(`${this.baseUrl}/physicianlist/${patientId}`,{ headers: this.reqHeaders });
    }

  // Define other methods for fetching appointments by different criteria
  // Implement methods for filtering, getting specific appointments, etc.
}
