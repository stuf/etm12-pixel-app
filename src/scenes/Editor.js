/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module EditorScene
 * @namespace scenes
 */
import * as React from 'karet';
import * as A from 'kefir.atom';
import * as U from 'karet.util';
import * as L from 'kefir.partial.lenses';
import * as Z from 'kefir.partial.lenses.history';

import Canvas from 'components/core/Canvas';

import { Field, Range, Dropdown, Checkbox } from 'components/form';
import Button from 'components/ui/Button';
import Palette from 'components/ui/Palette';
import Bitmap from 'components/ui/Bitmap';
import TimeControlButton from 'components/ui/TimeControlButton';
import Group from 'components/ui/Group';
import Devtool from 'components/molecules/panel/Devtool';

import LayoutHeader from 'components/layout/Header';

import * as M from 'common/meta';
import { empty } from 'common/canvas';

function EditorScene(props) {
  const { state, canvasData, menuItems, env } = props;

  const {
    canvas,
    drawable,
    color,
    currentFile,
    app,
    devtool,
    tool,
  } = U.destructure(state);
  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);

  const data = U.view(Z.present, canvasData);

  const selectedPalette = U.view(currentPalette, palettes);
  const selectedColor = U.view(currentColor, M.itemsIn(selectedPalette));

  const imageDataValid = canvasData instanceof A.AbstractMutable;

  const ensureEmptyImage = U.thru(
    empty(size),
    U.consume(data => U.view(Z.present, canvasData).set(data)),
  );

  return (
    <div
      className={U.cns('scene-root', 'editor-root')}
      data-scene-name="editor"
    >
      {U.ifElse(
        imageDataValid,
        <>
          <>{U.sink(ensureEmptyImage)}</>
          <LayoutHeader
            {...{
              env,
              menuItems,
              className: 'editorTop',
              name: M.nameIn(currentFile),
              isEditing: M.isEditingIn(currentFile),
            }}
          />

          <div className={U.cns('editorLeft')}>
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

            <Group title="History">
              <div>{U.mapValue(x => x - 1, U.view(Z.count, canvasData))}</div>

              <Range
                {...{
                  id: 'history-slider',
                  value: U.view(Z.index, canvasData),
                  min: 0,
                  max: Z.indexMax(canvasData),
                  onChange: U.getProps({
                    valueAsNumber: U.view(Z.index, canvasData),
                  }),
                }}
              />

              <div>
                <TimeControlButton count={U.view(Z.undoIndex, canvasData)}>
                  Undo
                </TimeControlButton>
                <TimeControlButton count={U.view(Z.redoIndex, canvasData)}>
                  Redo
                </TimeControlButton>
              </div>

              <Button onClick={U.doModify(canvasData, Z.undoForget)}>
                Purge history
              </Button>
            </Group>

            {U.when(
              U.view('devMode', app),
              <Group title="Dev tools">
                <Devtool flags={U.view('flags', devtool)} />
              </Group>,
            )}
          </div>

          <div className={U.cns('relative-pos', 'editorCenter')}>
            <Canvas
              {...{
                devtool,
                size,
                scale,
                drawable,
                data,
                color: selectedColor,
              }}
            />
          </div>

          <div className={U.cns('editorRight')}>
            <Group title="Preview">
              <Bitmap
                {...{
                  size,
                  scale: 2,
                  data: U.view(Z.present, canvasData),
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

            <Group title="Canvas">
              <Field label="Width" value={U.view([0, M.fmt.wNumber], size)} />
              <Field label="Height" value={U.view([1, M.fmt.wNumber], size)} />
              <Field label="Scale" value={U.view(M.fmt.wNumber, scale)} />
            </Group>
          </div>
        </>,
        <div>somethings wrong</div>,
      )}
    </div>
  );
}

export default EditorScene;
