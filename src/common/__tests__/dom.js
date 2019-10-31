import { mkElem } from 'common/dom';

describe('common/dom', () => {
  it('mkElem', () => {
    const el = mkElem('div', { width: 200, height: 300 });

    expect(el).toBeInstanceOf(HTMLElement);
    expect(el).toBeInstanceOf(HTMLDivElement);
    expect(el).toMatchObject({ width: 200 });
  });
});
