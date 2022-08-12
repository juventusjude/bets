import { Component, OnInit } from '@angular/core';
import { StringConstantsService } from '../string-constants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public sconst:StringConstantsService) {
    
   }

  ngOnInit(): void {
  
  }

}
