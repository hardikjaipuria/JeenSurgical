import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Option } from "../../option.model";
import { ThemeServiceService } from "../theme-service.service";

@Component({
  selector: 'app-jeenheader',
  templateUrl: './jeenheader.component.html',
  styleUrls: ['./jeenheader.component.css']
})
export class JeenheaderComponent implements OnInit {
   
   options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(private readonly themeService: ThemeServiceService) { }

  ngOnInit(): void {
    this.themeService.setTheme("deeppurple-amber");
  }

   themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

}
