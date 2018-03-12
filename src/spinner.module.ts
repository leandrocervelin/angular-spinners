import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, HttpModule],
  exports: [SpinnerComponent],
  providers: [SpinnerService]
})
export class SpinnerModule { }