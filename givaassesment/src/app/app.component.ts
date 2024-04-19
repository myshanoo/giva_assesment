import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButton } from '@angular/material/button';


 interface PeriodicElement {
  name: string;
  mail: any;
  disabled: boolean;
  roles: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "mail": "shalini@giva.co",
    "name": "Shalini",
    "disabled": false,
    "roles": ["Inventory View", "Design"]
  },
  {
    "mail": "shima@giva.co",
    "name": "Shima",
    "disabled": true,
    "roles": ["Discount"]
  },
  {
    "mail": "rishabh@giva.co",
    "name": "Rishabh",
    "disabled": true,
    "roles": ["Admin"]
  }

];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatTableModule,MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'givaassesment';

  displayedColumns: string[] = ['mail', 'name', 'status', 'roles'];
  dataSource = ELEMENT_DATA;







onClick(){



}

}


