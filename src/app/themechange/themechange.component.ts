import { Component, OnInit } from '@angular/core';

import { EventEmitter, Input, Output } from '@angular/core';

import { Option } from '../../option.model';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-themechange',
  templateUrl: './themechange.component.html',
  styleUrls: ['./themechange.component.css']
})
export class ThemechangeComponent implements OnInit {

   @Input() options: Array<Option>;
   @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeServiceService) {   }

  changeTheme(themeToSet: string) {
    this.themeChange.emit(themeToSet);
  }

  ngOnInit(): void {
  }

}
