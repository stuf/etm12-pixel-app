/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module EditorScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import * as Z from 'kefir.partial.lenses.history';

import * as T from './index.d';
import styles from './index.module.scss';

import Canvas from 'components/core/Canvas';

import { Field, Range, Dropdown } from 'components/form';
import Button from 'components/ui/Button';
import Palette from 'components/ui/Palette';
import Bitmap from 'components/ui/Bitmap';
import TimeControlButton from 'components/ui/TimeControlButton';
import Group from 'components/ui/Group';

import LayoutHeader from 'components/layout/Header';

import * as M from 'common/meta';
import { empty } from 'common/canvas';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function EditorScene(props) {
  const { state, canvasData, menuItems, env } = props;

  const { canvas, drawable, color, currentFile, tool } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);

  const data = U.view(Z.present, canvasData);

  const selectedPalette = U.view(currentPalette, palettes);
  const selectedColor = U.view(currentColor, M.itemsIn(selectedPalette));

  const ensureEmptyImage = U.thru(
    empty(size),
    U.consume(data => {
      if (!(canvasData instanceof K.Property)) {
        console.warn('`canvasData` is not observable!', canvasData);
        console.trace();

        U.view(Z.present, canvasData).set(data);
      }
    }),
  );

  return (
    <div className={U.cns('scene-root', styles.root)} data-scene-name="editor">
      <>{U.sink(ensureEmptyImage)}</>
      <LayoutHeader
        {...{
          env,
          menuItems,
          className: styles.top,
          name: M.nameIn(currentFile),
          isEditing: M.isEditingIn(currentFile),
        }}
      />

      <div className={U.cns(styles.left, styles.panel)}>
        <Group title="Palette">
          <Dropdown {...{ items: palettes, value: currentPalette }} />
          <Palette
            {...{
              currentColor,
              name: U.view('name', selectedPalette),
              items: U.view('items', selectedPalette),
            }}
          />
        </Group>
      </div>

      <div className="relative-pos">
        <Canvas
          {...{
            size,
            scale,
            drawable,
            data,
            color: selectedColor,
          }}
        />
      </div>

      <div className={U.cns(styles.right, styles.panel)}>
        <Group title="Preview">
          <Bitmap
            {...{
              size,
              scale: 2,
              data: U.view(Z.present, U.skipUnless(R.identity, canvasData)),
            }}
          />
        </Group>

        <Group title="Image">
          <Field
            label="Name"
            value={U.view(['currentFile', 'name', L.valueOr('')], state)}
          />

          <Button>Clear image</Button>
        </Group>

        <Group title="History">
          <div>{U.mapValue(x => x - 1, U.view(Z.count, canvasData))}</div>

          <Range
            {...{
              value: U.view(Z.index, canvasData),
              min: 0,
              max: Z.indexMax(canvasData),
              onChange: U.getProps({
                valueAsNumber: U.view(Z.index, canvasData),
              }),
            }}
          />

          <TimeControlButton count={U.view(Z.undoIndex, canvasData)}>
            Undo
          </TimeControlButton>
          <TimeControlButton count={U.view(Z.redoIndex, canvasData)}>
            Redo
          </TimeControlButton>
          <Button group onClick={U.doModify(canvasData, Z.undoForget)}>
            Purge history
          </Button>
        </Group>

        <Group title="Canvas">
          <Field label="Width" value={U.view([0, M.fmt.wNumber], size)} />
          <Field label="Height" value={U.view([1, M.fmt.wNumber], size)} />
          <Field label="Scale" value={U.view(M.fmt.wNumber, scale)} />
        </Group>
      </div>
    </div>
  );
}

export default EditorScene;
