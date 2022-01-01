import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-predicting',
  templateUrl: './predicting.component.html',
  styleUrls: ['./predicting.component.css']
})
export class PredictingComponent implements OnInit {

  constructor(private fb: FormBuilder, private predictService: PredictService) { }

  idSubmitted = false;

  form!: FormGroup;
  educations = ["Without college", "College", "Bachelors", "Masters", "Phd"]
  educationFields = ["Human resources", "Life sciences", "Marketing", "Madical", "Technical degree", "Other"]
  departments = ["Sales", "Research & develoment", "Human resources"]
  jobRoles = ["Healthcare representative", "Human resources", "Laboratory technician", "Manager", "Manufacturing director", "Research director", "Research scientist", "Sales executive", "Sales representative"]
  businessTravels = ["Non-travel", "Travel frequently", "Travel rarely"]

  ngOnInit(): void {
    this.form = this.fb.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      education: ['', Validators.required],
      educationField: ['', Validators.required],
      distance: ['', Validators.required],
      department: ['', Validators.required],
      jobRole: ['', Validators.required],
      dailyRate: ['', Validators.required],
      businessTravel: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      overTime: ['', Validators.required],
      totalWorkingYears: ['', Validators.required],
      trainingTimesLastYear: ['', Validators.required],
      yearsInCurrentRole: ['', Validators.required],
      yearsSinceLastPromotion: ['', Validators.required],
      yearsWithCurrentManager: ['', Validators.required],
    })
  }

  onSubmit() {
    this.idSubmitted = true;
    this.form.markAsTouched()
    if (!this.form.valid) return;
    this.predictService.postPredictData(this.form.value);
  }


}
