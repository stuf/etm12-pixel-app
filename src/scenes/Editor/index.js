/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module EditorScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';
import * as Z from 'kefir.partial.lenses.history';

import * as T from './index.d';
import styles from './index.module.scss';

import { Field, Range, Dropdown } from 'components/form';
import Canvas from 'components/ui/Canvas';
import Palette from 'components/ui/Palette';
import Details from 'components/ui/Details';
import Bitmap from 'components/ui/Bitmap';
import TimeControlButton from 'components/ui/TimeControlButton';

import LayoutHeader from 'components/layout/Header';

import * as M from 'common/meta';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function EditorScene(props) {
  const { state, canvasData, menuItems, env } = props;

  const { canvas, color, currentFile, tool } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);

  const selectedPalette = U.view(currentPalette, palettes);

  const currentTool = M.currentIn(tool);
  const currentColorValue = U.view(
    [currentPalette, 'items', currentColor],
    palettes,
  );
  currentColorValue.log();

  return (
    <div className={U.cns('scene-root', styles.root)} data-scene-name="editor">
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
        <Details title="Palette">
          <fieldset>
            <legend>Palettes</legend>

            <Dropdown {...{ items: palettes, value: currentPalette }} />
          </fieldset>

          <Palette
            {...{
              currentColor,
              name: U.view('name', selectedPalette),
              items: U.view('items', selectedPalette),
            }}
          />

          <fieldset>
            <legend>Current color</legend>

            <div></div>
          </fieldset>
        </Details>
      </div>
      <div className="relative-pos">
        <Canvas
          {...{ size, scale, color, canvasData: U.view(Z.present, canvasData) }}
        />
      </div>
      <div className={U.cns(styles.right, styles.panel)}>
        <Details title="Preview">
          <Bitmap
            {...{
              size,
              scale: 2,
              data: U.view(Z.present, U.skipUnless(R.identity, canvasData)),
            }}
          />
        </Details>

        <Details title="Image">
          <Field
            label="Name"
            value={U.view(['currentFile', 'name', L.valueOr('')], state)}
          />

          <fieldset>
            <legend>Controls</legend>

            <button>Clear image</button>
          </fieldset>
        </Details>

        <Details title="History">
          <div>{U.view(Z.count, canvasData).map(x => x - 1)}</div>

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

          <fieldset>
            <legend>Controls</legend>

            <TimeControlButton count={U.view(Z.undoIndex, canvasData)}>
              Undo
            </TimeControlButton>
            <TimeControlButton count={U.view(Z.redoIndex, canvasData)}>
              Redo
            </TimeControlButton>
            <button onClick={U.doModify(canvasData, Z.undoForget)}>
              Purge history
            </button>
          </fieldset>
        </Details>

        <Details title="Canvas">
          <Field label="Width" value={U.view([0, M.fmt.wNumber], size)} />
          <Field label="Height" value={U.view([1, M.fmt.wNumber], size)} />
          <Field label="Scale" value={U.view(M.fmt.wNumber, scale)} />
        </Details>
      </div>
    </div>
  );
}

export default EditorScene;
