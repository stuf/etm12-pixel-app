import * as E from 'common/events';

it('takeEvents(<div />) => Observable(Event)', done => {
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
