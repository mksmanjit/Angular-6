import { EmailDistribution } from './../models/email-distribution';
import { EmailDistributionService } from './../email-distribution.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email-lists',
  templateUrl: './email-lists.component.html',
  styleUrls: ['./email-lists.component.css']
})
export class EmailListsComponent implements OnInit {

  emailDistributionLists: EmailDistribution[];

  constructor(private emailService: EmailDistributionService) { }

  ngOnInit() {
     this.emailService.getEmailDistributionLists()
     .subscribe(emailDistributionLists => { console.log(emailDistributionLists); this.emailDistributionLists = emailDistributionLists; });

  }

}
