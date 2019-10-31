/**
 * @param {string} type
 * @param {object} attrs
 * @return {HTMLElement}
 */
export const mkElem = (type, attrs) =>
  Object.assign(document.createElement(type), attrs);
