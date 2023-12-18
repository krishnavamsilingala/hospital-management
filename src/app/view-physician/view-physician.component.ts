import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Physician } from '../model/Physician';
import { PhysicianService } from '../service/physician.service';

@Component({
  selector: 'app-view-physician',
  templateUrl: './view-physician.component.html',
  styleUrls: ['./view-physician.component.css']
})
export class ViewPhysicianComponent implements OnInit {
  physicians: Physician[] = [];
  selectedFilter: string = 'position'; // Default selected filter
  positionFilter: string = '';
  nameFilter: string = '';
  empIdFilter: number = 0; // Initialize empIdFilter with appropriate default value

  constructor(private physicianService: PhysicianService, private router: Router) { }

  ngOnInit(): void {
    this.loadPhysicians();
  }

  loadPhysicians(): void {
    this.physicianService.getAllPhysicians().subscribe(physicians => {
      this.physicians = physicians;
      console.log(physicians);
    });
  }

  filterPhysicians() {
    switch (this.selectedFilter) {
      case 'position':
        this.physicianService.filterByPosition(this.positionFilter).subscribe(
          (data) => {
            this.physicians = data;
          },
          (error) => {
            console.error('Error filtering', error);
            this.resetFilter();
          }
        );
        break;
      case 'name':
        this.physicianService.filterByName(this.nameFilter).subscribe(
          (data) => {
            this.physicians = [data];
          },
          (error) => {
            console.error('Error filtering', error);
            this.resetFilter();
          }
        );
        break;
      case 'empId':
        this.physicianService.filterByEmpId(this.empIdFilter).subscribe(
          (data) => {
            this.physicians = [data];
          },
          (error) => {
            console.error('Error filtering', error);
            this.resetFilter();
          }
        );
        break;
      default:
        break;
    }
  }

  resetFilter() {
    this.positionFilter = '';
    this.nameFilter = '';
    this.empIdFilter = 0;
    this.loadPhysicians();
  }

  public editPhysician(physician: Physician) {
    this.router.navigate(['physicians/update', { ...physician }]);
  }
}
