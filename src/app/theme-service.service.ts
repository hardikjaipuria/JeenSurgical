import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Option } from '../option.model';
import { SytleManagerService } from './sytle-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  constructor(private http: HttpClient, private sytleManager: SytleManagerService) {  }

   getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>('assets/options.json');
  }

  setTheme(themeToSet) {
    this.sytleManager.setStyle(
      'theme',
      `assets/${themeToSet}.css`
    );
  }
}
