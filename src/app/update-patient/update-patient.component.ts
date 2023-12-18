// update-patient.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/Patient'; // Adjust the path based on your file structure

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  ssn: number;
  patient: Patient;
  updatedPhone: string;
  updatedAddress: string;

  constructor(private route: ActivatedRoute, private patientService: PatientService) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        // Assuming the params contain individual properties
        const { ssn, name, address, phone, insuranceid, pcp } = params;

        // Create a new Patient object using the parameters
        this.patient = {
          ssn: +ssn, // Assuming 'ssn' is a number, use '+' to convert string to number
          name: name,
          address: address,
          phone: phone,
          insuranceid: +insuranceid, // Assuming 'insuranceid' is a number
          pcp: +pcp // Assuming 'pcp' is a number
        };

        this.ssn = this.patient?.ssn;
        this.updatedPhone = this.patient?.phone;
        this.updatedAddress = this.patient?.address;
      });
    }


  updatePhone() {
    this.patientService.updatePatientPhone(this.patient.ssn, this.patient.phone).subscribe(response => {
      //console.log('Phone number updated:', response);
      // Handle success - maybe show a success message or update UI
    }, error => {
      console.error('Error updating phone number:', error);
      // Handle error - show an error message or handle accordingly
    });
  }

  updateAddress() {
    this.patientService.updatePatientAddress(this.patient.ssn, this.patient.address).subscribe(response => {
      console.log('Address updated:', response);
      // Handle success - maybe show a success message or update UI
    }, error => {
      console.error('Error updating address:', error);
      // Handle error - show an error message or handle accordingly
    });
  }
}
