import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/list' },
      { path: 'list', loadChildren: '@integration/list/list.module#ListModule' },
      { path: 'detail', loadChildren: '@integration/detail/detail.module#DetailModule' },
      { path: 'counter', loadChildren: '@integration/counter/counter.module#CounterModule' },
      {
        path: 'deep-routes',
        loadChildren: '@integration/deep-routes/deep-routes.module#DeepRoutesModule'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
