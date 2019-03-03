import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { OpenAlert } from '@integration/deep-routes/test/test.actions';
import { TestState } from '@integration/deep-routes/test/test.state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  @Select(TestState) public $test: Observable<string[]>;
  constructor(private store: Store) {}

  onOpenAlert(): void {
    this.store.dispatch(new OpenAlert('alert'));
  }
}
