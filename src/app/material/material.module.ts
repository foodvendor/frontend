import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatButtonModule, MatTableModule, MatRadioModule } from '@angular/material';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
//import { MatTableModule } from '@angular/material/table';

const material = [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatRadioModule];
@NgModule({
  imports: [
    material,
  ],
  exports: [
    material,
  ]
})
export class MaterialModule { }
