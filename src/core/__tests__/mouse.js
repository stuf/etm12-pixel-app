import { mouseEventsFor } from 'core/mouse';

let dom;
let fn;
let ev;

beforeEach(() => {
  dom = document.createElement('div');
  fn = jest.fn();
  ev = mouseEventsFor(dom);
});

it('onButtonDown', done => {
  ev.onButtonDown.onValue(fn);

  ev.onButtonDown.take(1).onEnd(() => {
    expect(fn).toHaveBeenCalled();
    done();
  });

  dom.dispatchEvent(new MouseEvent('mousedown'));
});

it('onDrag', done => {
  ev.onDrag.onValue(fn);

  ev.onDrag.take(1).onEnd(() => {
    expect(fn).toHaveBeenCalled();
    done();
  });

  dom.dispatchEvent(new MouseEvent('mousedown'));
  dom.dispatchEvent(new MouseEvent('mousemove'));
  dom.dispatchEvent(new MouseEvent('mouseup'));
});
