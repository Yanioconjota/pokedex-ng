import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HttpClientModule } from '@angular/common/http';

const imports = [CommonModule, FormsModule, HttpClientModule, MatButtonModule, RouterOutlet, MatSlideToggleModule];
const components = [HeaderComponent, ThemeToggleComponent];

@NgModule({
  declarations: [...components],
  imports: [...imports],
  exports: [MatSlideToggleModule, ...components]
})
export class SharedModule { }
