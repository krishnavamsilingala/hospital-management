import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Physician } from './../model/Physician';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  private apiUrl = 'http://localhost:9092/api/physician';

  reqHeaders = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem('token')}`,
              'accept': '*/*'
            });

  constructor(private http: HttpClient) {}

  getAllPhysicians(): Observable<Physician[]> {
    return this.http.get<Physician[]>(this.apiUrl,{ headers: this.reqHeaders });
  }

  filterByPosition(position: string): Observable<Physician[]> {
    return this.http.get<Physician[]>(`${this.apiUrl}/position/${position}`,{ headers: this.reqHeaders });
  }


  createPhysician(physicianData: Physician): Observable<any> {
    return this.http.post<any>(this.apiUrl, physicianData, { headers: this.reqHeaders });
  }

  filterByEmpId(empId: number): Observable<Physician> {
      return this.http.get<Physician>(`${this.apiUrl}/${empId}`, { headers: this.reqHeaders });
    }

  filterByName(name: string): Observable<Physician> {
      return this.http.get<Physician>(`${this.apiUrl}/name/${name}`, { headers: this.reqHeaders });
    }

    updatePhysicianName(empId: number, newName: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/update/name/${empId}`, { name: newName }, { headers: this.reqHeaders });
      }

      updatePhysicianPosition(empId: number, newPosition: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/update/position/${empId}`, { position: newPosition }, { headers: this.reqHeaders });
      }

      updatePhysicianSSN(empId: number, newSSN: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/update/ssn/${empId}`, { ssn: newSSN }, { headers: this.reqHeaders });
      }


  // Add other methods for updating physician details as needed
}
