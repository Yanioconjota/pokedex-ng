import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const imports = [CommonModule, MatButtonModule, RouterOutlet, MatSlideToggleModule]


@NgModule({
  declarations: [],
  imports: [...imports],
  exports: [MatSlideToggleModule]
})
export class SharedModule { }
