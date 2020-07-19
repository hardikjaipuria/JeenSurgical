import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-jeenbody',
  templateUrl: './jeenbody.component.html',
  styleUrls: ['./jeenbody.component.css']
})
export class JeenbodyComponent implements OnInit {
     page = {
    title: 'Medical Equipments and Surgical items',
    subtitle: 'Welcome to Jeen Surgical!',
    content: 'Leading medical suplier in India',
  };
  constructor(public snackBar: MatSnackBar) { }
  
  ngOnInit(): void {

}

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 4500,
      });
    }
}
