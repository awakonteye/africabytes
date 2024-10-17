import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,FormsModule,MatDialogModule,
    MatCheckboxModule, ReactiveFormsModule,CommonModule, MatSelectModule],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css',]

})
export class FormulaireComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'prenom': ['', Validators.required],
      'nom': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'message': ['',Validators.required ],
      'profession': ['',Validators.required ],
    });
  }

  onSubmit(){
    if (this.myForm.valid) {
      console.log("Formulaire soumis", this.myForm.value);
    }
  
  }
  //liste deroulante
  selectedProfession!: string ;
  professions: string[] = [
      'Developeur',
      'Design',
      'autre'
  ];
  //soumettre un file
  
    
}
