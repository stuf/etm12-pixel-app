import * as R from 'kefir.ramda';
import {
  Document,
  Window,
  altPressed,
  ctrlPressed,
  metaPressed,
  shiftPressed,
} from 'core/global-events';

const testSingleEvent = ({ title, type, Ctor, source, obs, evOpts }) => {
  it(title, done => {
    obs.take(1).onValue(e => {
      expect(e.type).toBe(type);
      expect(e).toBeInstanceOf(Ctor);

      if (evOpts) {
        expect(R.whereEq(evOpts, e)).toBe(true);
      }

      done();
    });

    source.dispatchEvent(new Ctor(type, evOpts));
  });
};

const runTests = tests =>
  tests.forEach(([title, type, Ctor, source, obs, evOpts]) =>
    testSingleEvent({ title, type, Ctor, source, obs, evOpts }),
  );

describe('global events', () => {
  describe('mouse', () => {
    const tests = [
      [
        'Window.mouse.mousedown',
        'mousedown',
        MouseEvent,
        window,
        Window.mouse.mousedown,
      ],
      [
        'Window.mouse.mouseup',
        'mouseup',
        MouseEvent,
        window,
        Window.mouse.mouseup,
      ],
      [
        'Window.mouse.mousemove',
        'mousemove',
        MouseEvent,
        window,
        Window.mouse.mousemove,
      ],
    ];

    runTests(tests);
  });

  describe('keyboard', () => {
    const tests = [
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

    runTests(tests);
  });
});

describe('derived global document events', () => {
  const tests = [
    [
      'altPressed',
      'keydown',
      KeyboardEvent,
      document,
      altPressed,
      { altKey: true },
    ],
    [
      'ctrlPressed',
      'keydown',
      KeyboardEvent,
      document,
      ctrlPressed,
      { ctrlKey: true },
    ],
    [
      'metaPressed',
      'keydown',
      KeyboardEvent,
      document,
      metaPressed,
      { metaKey: true },
    ],
    [
      'shiftPressed',
      'keydown',
      KeyboardEvent,
      document,
      shiftPressed,
      { shiftKey: true },
    ],
  ];

  runTests(tests);

  it('altPressed', done => {
    altPressed.onValue(v => {
      expect(v.altKey).toBe(true);
      done();
    });

    document.dispatchEvent(new KeyboardEvent('keydown', { altKey: true }));
  });
});

it('Window.mouse.mousedrag', done => {
  Window.mouse.mousedrag.take(2).onValue(() => {
    done();
  });

  window.dispatchEvent(new MouseEvent('mousedown'));
  window.dispatchEvent(new MouseEvent('mousemove'));
  window.dispatchEvent(new MouseEvent('mouseup'));
});
