import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhysicianService } from '../service/physician.service';
import { Physician } from '../model/Physician';

@Component({
  selector: 'app-update-physician',
  templateUrl: './update-physician.component.html',
  styleUrls: ['./update-physician.component.css']
})
export class UpdatePhysicianComponent implements OnInit {
  empId: number;
  physician: Physician;
  updatedPosition: string;
  updatedName: string;
  updatedSSN: number;

  constructor(private route: ActivatedRoute, private physicianService: PhysicianService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Assuming the params contain individual properties
      const { employeeid, ssn, name, position } = params;

      // Create a new Physician object using the parameters
      this.physician = {
        employeeid: +employeeid, // Assuming 'employeeid' is a number
        ssn: +ssn, // Assuming 'ssn' is a number, use '+' to convert string to number
        name: name,
        position: position
        // Additional fields if needed
      };

      // Initialize the updated fields with the received values
      this.updatedPosition = this.physician?.position;
      this.updatedName = this.physician?.name;
      this.updatedSSN = this.physician?.ssn;
      // Additional fields initialization if needed
    });
  }



  updatePosition() {
    this.physicianService.updatePhysicianPosition(this.physician.employeeid, this.physician.position).subscribe(
      response => {
        console.log('Position updated:', response);
        // Handle success - show success message or update UI
      },
      error => {
        console.error('Error updating position:', error);
        // Handle error - show error message or handle accordingly
      }
    );
  }

  updateName() {
    this.physicianService.updatePhysicianName(this.physician.employeeid, this.physician.name).subscribe(
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

  updateSSN() {
    this.physicianService.updatePhysicianSSN(this.physician.employeeid, this.physician.ssn).subscribe(
      response => {
        console.log('SSN updated:', response);
        // Handle success - show success message or update UI
      },
      error => {
        console.error('Error updating SSN:', error);
        // Handle error - show error message or handle accordingly
      }
    );
  }

  // Add more update methods for other fields if needed
}
