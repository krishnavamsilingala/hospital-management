import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../model/Department';
import { Physician } from './../model/Physician';
import { TrainedIn } from './../model/TrainedIn';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  private base='http://localhost:9092';
      private apiUrl = this.base+'/api/department';

      private baseUrl = this.base+'/api/department';

      reqHeaders = new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem('token')}`,
              'accept': '*/*'
            });

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}`,{ headers: this.reqHeaders });
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.baseUrl}/${id}`,{ headers: this.reqHeaders });
  }

  getHeadOfDepartmentById(id: number): Observable<Physician> {
    return this.http.get<Physician>(`${this.baseUrl}/head/${id}`,{ headers: this.reqHeaders });
  }

  getCertificationByHeadId(deptid: number): Observable<TrainedIn[]> {
    return this.http.get<TrainedIn[]>(`${this.baseUrl}/headcertification/${deptid}`,{ headers: this.reqHeaders });
  }

  getDepartmentByHead(head: number): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/get/${head}`,{ headers: this.reqHeaders });
  }

  updateHeadBy(deptid: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.baseUrl}/update/headid/${deptid}`, department,{ headers: this.reqHeaders });
  }

  updateName(deptid: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.baseUrl}/update/deptname/${deptid}`, department,{ headers: this.reqHeaders });
  }

  checkPhysicianHead(physicianid: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check/${physicianid}`,{ headers: this.reqHeaders });
  }

  addDepartment(department: Department): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, department,{ headers: this.reqHeaders });
  }
}
