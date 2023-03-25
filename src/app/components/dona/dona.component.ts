import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin titulo';
  @Input() label: string[] =['1','2','3'];  
  @Input() data: number[] =[1,2,3];


  public doughnutChartLabels: string[] = [];
  
  public colors:any[]=[
    {backgroundColor:['#9E120E','#FF5800','#FFB414']}
  ]

  public doughnutChartData: ChartData<'doughnut'> = {    
    labels: [],
    datasets: []
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {    
    console.log(this.label);    
    console.log(this.title);    
    console.log(this.data);

    this.doughnutChartData = {    
      labels: this.label,
      datasets: [
        { data: this.data,
          backgroundColor: this.colors[0].backgroundColor}        
      ]
    };
   
  }




}
