import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../service/department.service';
import { Department } from '../model/Department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  deptId: number;
  department: Department;
  updatedHead: number;
  updatedName: string;

  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {  departmentid,name,head } = params;
      this.department={
          departmentid: +departmentid,
          name: name,
          head: +head
      }
      this.deptId = this.department.departmentid;
      this.updatedHead = this.department.head;
      this.updatedName = this.department.name;
    });
  }

  updateHead() {
    this.departmentService.updateHeadBy(this.deptId, this.department).subscribe(
      response => {
        console.log('Head updated:', response);
        // Handle success - show success message or update UI
      },
      error => {
        console.error('Error updating head:', error);
        // Handle error - show error message or handle accordingly
      }
    );
  }

  updateName() {
    this.departmentService.updateName(this.deptId, this.department).subscribe(
      response => {
        console.log('Name updated:', response);
        // Handle success - show success message or update UI
      },
      error => {
        console.error('Error updating name:', error);
        // Handle error - show error message or handle accordingly
      }
    );
  }
}
