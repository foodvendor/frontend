import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';

const material = [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule];
@NgModule({
  imports: [
    material,    
  ],
  exports: [
    material,    
  ]
})
export class MaterialModule { }
