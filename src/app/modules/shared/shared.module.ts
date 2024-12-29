import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FormsModule } from '@angular/forms';

const imports = [CommonModule, FormsModule, MatButtonModule, RouterOutlet, MatSlideToggleModule]


@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [...imports],
  exports: [MatSlideToggleModule, ThemeToggleComponent]
})
export class SharedModule { }
