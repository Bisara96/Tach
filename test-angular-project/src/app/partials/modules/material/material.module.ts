import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, NoopAnimationsModule],
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, NoopAnimationsModule],
})
export class MaterialModule { }
