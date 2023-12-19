import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'create') {
      this.router.navigate(['departments/create']);
    } else if (route === 'view') {
      this.router.navigate(['departments/view']);
    }
  }
}
