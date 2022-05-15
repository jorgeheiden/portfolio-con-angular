import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-logged',
  templateUrl: './portfolio-logged.component.html',
  styleUrls: ['./portfolio-logged.component.scss']
})
export class PortfolioLoggedComponent implements OnInit {

  valor = "LogOut"

  constructor() { }

  ngOnInit(): void {
  }

}
