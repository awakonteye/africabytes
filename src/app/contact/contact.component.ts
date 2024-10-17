import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FormulaireComponent } from '../formulaire/formulaire.component';
// import { GoogleMapComponent } from '../google-map/google-map.component'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    constructor(private matDialog: MatDialog) {}

    // Ouvre le formulaire dans un dialogue
    openFormulaire() {
        this.matDialog.open(FormulaireComponent, {
          width: '380px',
        });
    }

    email: string = 'contact@africabytes.com'

    // Ouvre la carte Google Maps dans un dialogue

}
