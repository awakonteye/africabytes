import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
// import { GoogleMapComponent } from '../google-map/google-map.component'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private dialog: MatDialog) {}

  openContactForm(): void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Contact form dialog closed');
    });
  }

    email: string = 'contact@africabytes.com'

    // Ouvre la carte Google Maps dans un dialogue

}
