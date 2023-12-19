import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../service/department.service';
import { Department } from '../model/Department';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {
  department: Department = {
    departmentid: 0,
    name: '',
    head: 0
  };

  constructor(private departmentService: DepartmentService,private router: Router) {}

  addDepartment() {
    this.departmentService.addDepartment(this.department).subscribe(
      (response) => {
        this.router.navigate(['departments/view']);
        // Handle success - show success message or update UI
      },
      (error) => {
        console.error('Error adding department:', error);
        this.router.navigate(['departments/view']);
        // Handle error - show error message or handle accordingly
      }
    );
  }
}
