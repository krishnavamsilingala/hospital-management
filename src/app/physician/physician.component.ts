import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrl: './physician.component.css'
})
export class PhysicianComponent {
  constructor(private router: Router) {}
  navigateTo(route: string) {
    if (route === 'create') {
      this.router.navigate(['physicians/create']);
    } else if (route === 'view') {
      this.router.navigate(['physicians/view']);
    }
  }
}
