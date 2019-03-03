import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from '@integration/deep-routes/test/test.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TestRoutingModule {}
