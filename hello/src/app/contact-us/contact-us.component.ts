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

  constructor(
    private predictService: PredictService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.predictService.getPredictData().subscribe((data) => {
      this.predictData = data.filter(
        (a: any) => a.payload.doc.data().userID === this.authService.userUID
      );
    });
  }
}
