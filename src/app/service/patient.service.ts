// patient.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:9092/api/patient';

  constructor(private http: HttpClient) {}

  createPatient(patientData: Patient): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    });

    return this.http.post<any>(this.apiUrl, patientData, { headers });
  }

  getAllPatients(): Observable<Patient[]> {
      return this.http.get<Patient[]>(this.apiUrl);
    }
}
