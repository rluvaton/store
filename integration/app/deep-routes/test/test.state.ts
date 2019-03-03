import { Action, State, StateContext } from '@ngxs/store';
import { OpenAlert } from '@integration/deep-routes/test/test.actions';

@State<string[]>({
  name: 'test',
  defaults: []
})
export class TestState {
  @Action(OpenAlert)
  openAlert({ setState }: StateContext<string[]>, { payload }: OpenAlert): void {
    setState((state: string[]) => [...state, payload]);
  }
}
