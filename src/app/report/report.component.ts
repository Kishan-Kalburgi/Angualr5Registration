import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id=params["id"];
      this.dataService.getUserList(this.id)
      .subscribe((data)=>{
        console.log(data)
      },
    err=>{
        
    })
    },
    err =>{

    }
    )
  }

}
