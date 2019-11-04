import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import * as K from 'kefir';

import { pagePos } from 'common/events';
import { fstIn, sndIn } from 'common/meta';
import {
  elementOffsetFor,
  offsetPositionWith,
  scalePositionWith,
} from 'common/position';
import { scaleSize, drawingEvents, getIxRange } from 'common/canvas';
import { reciprocal } from 'common/util';
import { fromHex } from 'shared';

import Bitmap from 'components/ui/Bitmap';
import PixelGrid from './_/PixelGrid';
import OffsetGuide from './_/OffsetGuide';

export default function Canvas(props) {
  const {
    size,
    color,
    scale,
    data,
    devtool,
    updateOffsetBy,
    dom = U.variable(),
  } = props;
  const rgba = L.get([L.dropPrefix('#'), L.reread(fromHex)], color);

  const updateBy = U.parallel([K.constant(true), updateOffsetBy]).toProperty();
  const scaledSize = scaleSize(size, scale);

  const pixelXY = drawingEvents(dom);
  const offset = updateBy.flatMap(() => elementOffsetFor(dom)).toProperty();
  const offsetXY = offsetPositionWith(offset, pagePos(pixelXY));
  const scaledXY = scalePositionWith(reciprocal(scale), offsetXY);

  const posIx = U.thru(
    getIxRange(scaledXY, fstIn(size)),
    U.skipDuplicates(R.equals),
  );

  const colorXY = K.combine([posIx], [rgba]).toProperty();

  //

  const updateData = U.thru(
    U.template([colorXY, size]),
    U.consume(([[[ia, ib], c]]) => {
      console.log({ ia, ib, c });
      data.view(L.slice(ia, ib)).set(c);
    }),
  );

  const effSink = U.sink(updateData);

  //

  return (
    <div
      className="core-canvas"
      ref={U.refTo(dom)}
      style={{
        width: fstIn(scaledSize),
        height: sndIn(scaledSize),
      }}
    >
      <>{effSink}</>
      <PixelGrid size={size} scale={scale} />
      {U.when(
        U.view(['flags', 'offsetGuide'], devtool),
        <OffsetGuide offset={offset} size={scaledSize} />,
      )}
      <Bitmap
        className="core-canvas--ignorePointerEvents"
        size={size}
        scale={scale}
        data={data}
      />
    </div>
  );
}

//

/**
 * @typedef {K.Property<HTMLElement, any>} ObsElement
 */
