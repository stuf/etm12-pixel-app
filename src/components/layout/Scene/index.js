/**
 * @module Scene
 * @namespace components.layout
 */
import * as React from 'karet';

import * as T from './index.d';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function Scene({ children }) {
  return <article className="scene-root">{children}</article>;
}

export default Scene;
