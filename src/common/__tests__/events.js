import * as E from 'common/events';

it('persistEvent', () => {
  const ev = { persist: jest.fn() };
  E.persistEvent(ev);

  expect(ev.persist).toHaveBeenCalled();
});

it('takeEvents', done => {
  const div = document.createElement('div');
  const ev = new Event('someevent');

  const ev$ = E.takeEvents('someevent', div)
    .take(1)
    .onValue(v => {
      expect(v.type).toBe('someevent');
      expect(v).toBeInstanceOf(Event);
      done();
    });

  div.dispatchEvent(ev);
});
