import * as U from 'karet.util';
/**
 * @param {string} type
 * @param {object} attrs
 * @return {HTMLElement}
 */
export const mkElem = (type, attrs) =>
  Object.assign(document.createElement(type), attrs);

export const mkResizeObserver = fn => new ResizeObserver(fn);

export const observeOffset = el => {
  const bus = U.bus();
  const observer = mkResizeObserver(([dom]) => bus.push(dom));

  return U.thru(
    el,
    U.tapPartial(dom => observer.observe(dom)),
    U.flatMapLatest(() => U.toProperty(bus)),
  );
};
