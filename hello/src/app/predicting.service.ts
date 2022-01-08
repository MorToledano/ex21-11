import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredictService {
  private url = "https://tp3ovv55kb.execute-api.us-east-1.amazonaws.com/beta";

  private categories:object = {0:'No', 1:'Yes'};

  classify(text:any){
    /*let json = {
      "Age":"35",
      "Gender":"Female",
      "MaritalStatus":"Single",
      "BusinessTravel":"Non-Travel",
      "DailyRate": "300",
      "Department": "Sales",
      "DistanceFromHome": "24",
      "Education": "College",
      "EducationField": "Other",
      "JobRole":"Sales Executive",
      "MonthlyIncome":"5000" ,
      "OverTime": "No",
      "TotalWorkingYears":"8" ,
      "TrainingTimesLastYear":"6" ,
      "YearsInCurrentRole": "6",
      "YearsSinceLastPromotion":"5" ,
      "YearsWithCurrManager": "3",
  }*/
  let body = JSON.stringify(text);
  return this.http.post<any>(this.url, body).pipe(
    map(res =>{
      console.log(res);
      let finel = res.body;
      return finel;
    })
  )
  }

  constructor(private http: HttpClient) { }
}
