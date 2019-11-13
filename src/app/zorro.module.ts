import { NgModule } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({

  imports: [
    NzDatePickerModule
  ],
  exports: [NzDatePickerModule]
})
export class ZorroModule { }
