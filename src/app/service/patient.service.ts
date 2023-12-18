// patient.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    //private base='https://5aea-106-206-52-90.ngrok-free.app';
    private base='http://localhost:9092';
    private apiUrl = this.base+'/api/patient';

    private baseUrl = this.base+'/api/patient';

    reqHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`,
            'accept': '*/*'
          });

    constructor(private http: HttpClient) {}

    createPatient(patientData: Patient): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`,
        'accept': '*/*'
      });

      return this.http.post<any>(this.apiUrl, patientData, { headers });
    }

    getAllPatients(): Observable<Patient[]> {
      const headers = new HttpHeaders({
        'Authorization': `${localStorage.getItem('token')}`,
        'accept': '*/*'
      });

      return this.http.get<Patient[]>(this.apiUrl, { headers });
    }

      updatePatientPhone(ssn: number, phone: string): Observable<any> {
      const headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem('token')}`,
              'accept': '*/*'
            });
        return this.http.put(this.apiUrl+"/"+`phone/${ssn}`, { phone }, { headers });
      }

      updatePatientAddress(ssn: number, address: string): Observable<any> {
      const headers = new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`,
                    'accept': '*/*'
                  });
        return this.http.put(this.apiUrl+"/"+`address/${ssn}`, { address }, { headers });
      }

      filterByPCP(pcp: string): Observable<any> {
          return this.http.get(`${this.baseUrl}/${pcp}`,{ headers: this.reqHeaders });
        }

        filterBySSNAndPCP(ssn: string, pcp: string): Observable<any> {
          return this.http.get(`${this.baseUrl}/${pcp}/${ssn}`,{ headers: this.reqHeaders });
        }

        filterInsuranceBySSN(ssn: string): Observable<any> {
          return this.http.get(`${this.baseUrl}/insurance/${ssn}`,{ headers: this.reqHeaders });
        }
}
