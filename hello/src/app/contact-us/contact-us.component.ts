import { Component, OnInit } from '@angular/core';
import { PredictService } from '../services/predict.service';

@Component({
  selector: 'app-prediction-history',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  predictData!: any;

  constructor(private predictService: PredictService) { }

  ngOnInit(): void {
    this.predictService.getPredictData()
      .subscribe(data => this.predictData = data)
  }

}
