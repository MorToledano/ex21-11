import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassifyService } from '../classify.service';
import { PredictService } from '../services/predict.service';


@Component({
  selector: 'app-predicting',
  templateUrl: './predicting.component.html',
  styleUrls: ['./predicting.component.css']
})
export class PredictingComponent implements OnInit {

  constructor(private fb: FormBuilder, private predictService: PredictService, private classif:ClassifyService) { }

  idSubmitted = false;

  form!: FormGroup;

  text: string | undefined;

  classify(){

  }
  

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      Age: ['', Validators.required],
      Gender: ['', Validators.required],
      MaritalStatus: ['', Validators.required],
      Education: ['', Validators.required],
      EducationField: ['', Validators.required],
      DistanceFromHome: ['', Validators.required],
      Department: ['', Validators.required],
      JobRole: ['', Validators.required],
      DailyRate: ['', Validators.required],
      BusinessTravel: ['', Validators.required],
      MonthlyIncome: ['', Validators.required],
      OverTime: ['', Validators.required],
      TotalWorkingYears: ['', Validators.required],
      TrainingTimesLastYear: ['', Validators.required],
      YearsInCurrentRole: ['', Validators.required],
      YearsSinceLastPromotion: ['', Validators.required],
      YearsWithCurrManager: ['', Validators.required],
    })
  }

  onSubmit() {
    this.idSubmitted = true;
    this.form.markAsTouched()
    if (!this.form.valid) return;
    this.classif.classify(this.form.value).subscribe((res:string)=>{
      var Result = <HTMLInputElement>(document.getElementById("result"));
      Result.innerHTML="The result is: "+res+"% that the employee will leave the job.";
    this.predictService.postPredictData(this.form.value, res); 
    var pic = <HTMLInputElement>(document.getElementById("picture"));
    pic.style.display = "block"; 
    });
  }


}