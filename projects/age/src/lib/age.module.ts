import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgeComponent } from './age.component';
import { AgePipe } from './age.pipe';




@NgModule({
  declarations: [AgeComponent, AgePipe],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [AgeComponent,AgePipe],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AgeModule { }
