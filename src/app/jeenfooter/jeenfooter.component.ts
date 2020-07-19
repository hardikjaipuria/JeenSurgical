import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeenfooter',
  templateUrl: './jeenfooter.component.html',
  styleUrls: ['./jeenfooter.component.css']
})
export class JeenfooterComponent implements OnInit {

  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {

    
  }

}
