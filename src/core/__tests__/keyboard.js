import * as Ev from 'core/keyboard';

it('listens to `keydown` events', done => {
  const e = Ev.onKeyDown(document);

  e.take(1).onValue(ev => {
    expect(ev).toBeInstanceOf(KeyboardEvent);
    done();
  });

  document.dispatchEvent(new KeyboardEvent('keydown'));
});

it('listens to `keyup` events', done => {
  const e = Ev.onKeyUp(document);

  e.take(1).onValue(ev => {
    expect(ev).toBeInstanceOf(KeyboardEvent);
    done();
  });

  document.dispatchEvent(new KeyboardEvent('keyup'));
});
