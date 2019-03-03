import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { TestState } from '@integration/deep-routes/test/test.state';
import { TestRoutingModule } from '@integration/deep-routes/test/test-routing.module';
import { TestComponent } from '@integration/deep-routes/test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, NgxsModule.forFeature([TestState])]
})
export class TestModule {}
