import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../model/Department';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  departments: Department[] = [];
  isEditing = false;
  editedDepartment!: Department;
  selectedFilter: string = 'head'; // Default selected filter
  headFilter: string = '';

  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(departments => {
      this.departments = departments;
      console.log(departments);
    });
  }

  public editDepartment(department: Department) {
    this.router.navigate(['departments/update', { ...department }]);
  }

  resetFilter() {
    this.headFilter = '';
    this.loadDepartments();
  }
}
