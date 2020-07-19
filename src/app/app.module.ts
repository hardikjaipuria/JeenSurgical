import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule} from '@angular/cdk/scrolling';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule  } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeenheaderComponent } from './jeenheader/jeenheader.component';
import { JeenbodyComponent } from './jeenbody/jeenbody.component';
import { JeenfooterComponent } from './jeenfooter/jeenfooter.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { MaterialElevationDirective } from './material-elevation.directive';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { ThemechangeComponent } from './themechange/themechange.component';


@NgModule({
  declarations: [
    AppComponent,
    JeenheaderComponent,
    JeenbodyComponent,
    JeenfooterComponent,
    ContactFormComponent,
    AboutComponent,
    ProductsComponent,
    ScrollerComponent,
    MaterialElevationDirective,
    PagelayoutComponent,
    ThemechangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkScrollableModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class PageModule { }
