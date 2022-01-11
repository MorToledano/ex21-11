import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PredictService } from '../services/predict.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prediction-history',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  predictData!: any;
  userID$!: Observable<any>;

  constructor(
    private predictService: PredictService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.predictService.getPredictData().subscribe((data) => {
      console.log(data);
      this.predictData = data;
    });

    this.userID$ = this.authService.getUser();
  }
}
