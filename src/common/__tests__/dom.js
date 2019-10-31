import { mkElem, mkResizeObserver, observeOffset } from 'common/dom';

describe('common/dom', () => {
  it('mkElem', () => {
    const el = mkElem('div', { width: 200, height: 300 });

    expect(el).toBeInstanceOf(HTMLElement);
    expect(el).toBeInstanceOf(HTMLDivElement);
    expect(el).toMatchObject({ width: 200 });
  });

  it('mkResizeObserver', () => {
    const fn = jest.fn();
    const obs = mkResizeObserver(fn);
    expect(obs).toBeInstanceOf(ResizeObserver);
  });

  it.skip('observeOffset', () => {
    const el = document.createElement('div');
    const obs = observeOffset(el);

    el.dispatchEvent(new UIEvent('resize'));
  });
});
