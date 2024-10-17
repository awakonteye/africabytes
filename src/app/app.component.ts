import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpertiseComponent } from "./expertise/expertise.component";
import { FormationComponent } from './formation/formation.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, ExpertiseComponent,FormationComponent,EquipeComponent,
    PartenaireComponent,ContactComponent, FooterComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AfricaBites';
}