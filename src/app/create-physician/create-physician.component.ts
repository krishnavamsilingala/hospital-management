import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhysicianService } from './../service/physician.service';
import { Physician } from './../model/Physician';

@Component({
  selector: 'app-create-physician',
  templateUrl: './create-physician.component.html',
  styleUrls: ['./create-physician.component.css']
})
export class CreatePhysicianComponent implements OnInit {
  physicianForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private physicianService: PhysicianService) {}

  ngOnInit(): void {
    this.physicianForm = this.formBuilder.group({
      employeeid: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      ssn: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.physicianForm.valid) {
      const physicianData: Physician = this.physicianForm.value as Physician;
      this.physicianService.createPhysician(physicianData).subscribe(
        (response) => {
          console.log('Physician created:', response);
          // Handle success - maybe show a success message or update UI
        },
        (error) => {
          console.error('Error creating physician:', error);
          // Handle error - show an error message or handle accordingly
        }
      );
    }
  }

  resetForm() {
    this.submitted = false;
    this.physicianForm.reset();
  }
}
