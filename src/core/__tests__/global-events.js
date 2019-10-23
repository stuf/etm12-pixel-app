import { Document, Window } from 'core/global-events';

const testSingleEvent = ({ title, type, Ctor, source, obs }) => {
  it(title, done => {
    obs.take(1).onValue(e => {
      expect(e.type).toBe(type);
      expect(e).toBeInstanceOf(Ctor);
      done();
    });

    source.dispatchEvent(new Ctor(type));
  });
};

const tests = [
  [
    'Window.mouse.mousedown',
    'mousedown',
    MouseEvent,
    window,
    Window.mouse.mousedown,
  ],
  ['Window.mouse.mouseup', 'mouseup', MouseEvent, window, Window.mouse.mouseup],
  [
    'Window.mouse.mousemove',
    'mousemove',
    MouseEvent,
    window,
    Window.mouse.mousemove,
  ],
  [
    'Document.keyboard.keydown',
    'keydown',
    KeyboardEvent,
    document,
    Document.keyboard.keydown,
  ],
  [
    'Document.keyboard.keyup',
    'keyup',
    KeyboardEvent,
    document,
    Document.keyboard.keyup,
  ],
];

tests.forEach(([title, type, Ctor, source, obs]) =>
  testSingleEvent({ title, type, Ctor, source, obs }),
);
