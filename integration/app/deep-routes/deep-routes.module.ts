import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DeepRoutesComponent } from '@integration/deep-routes/deep-routes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeepRoutesComponent,
        children: [
          {
            path: 'test/new',
            loadChildren: '@integration/deep-routes/test/test.module#TestModule'
          },
          {
            path: 'test/:id/edit',
            loadChildren: '@integration/deep-routes/test/test.module#TestModule'
          },
          {
            path: 'test/:id/detail',
            loadChildren: '@integration/deep-routes/test/test.module#TestModule'
          }
        ]
      }
    ])
  ],
  declarations: [DeepRoutesComponent]
})
export class DeepRoutesModule {}
