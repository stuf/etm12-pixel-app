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

import { ClearHistoryButton, TimeControlButton } from 'components/core/History';
import { Field, Range, Dropdown } from 'components/form';
import { FlagToggleList } from 'components/core/Devtool';
import * as Panel from 'components/panels';
import Button from 'components/ui/Button';
import Bitmap from 'components/ui/Bitmap';
import Group from 'components/ui/Group';

import LayoutHeader from 'components/layout/Header';

import * as M from 'common/meta';
import { empty, saveImage } from 'common/canvas';

export default function EditorScene(props) {
  const test = U.atom(32);
  const { state, canvasData, menuItems, env } = props;
  const { canvas, color, currentFile, devtool } = U.destructure(state);

  const { size, scale } = U.destructure(canvas);
  const { currentColor, currentPalette, palettes } = U.destructure(color);
  const currentFileName = U.view('name', currentFile);

  const data = U.view(Z.present, canvasData);

  const selectedPalette = U.view(currentPalette, palettes);
  const selectedColor = U.view(currentColor, M.itemsIn(selectedPalette));

  const imageDataValid = canvasData instanceof A.AbstractMutable;

  const canvasDataCurrent = U.view(Z.present, canvasData);

  //

  const actions = U.serializer();

  const saveImageEff = U.doPush(actions, () =>
    U.thru(
      U.template([canvasDataCurrent, size, currentFileName]),
      U.takeFirst(1),
      U.consume(([xs, [w, h], n]) => saveImage(xs, [w, h], n)),
    ),
  );

  //

  return (
    <section className={U.cns('scene-root', 'editor-root')}>
      {U.ifElse(
        imageDataValid,
        <>
          <>{U.sink(U.parallel([actions]))}</>
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
            <Panel.Devtools {...{ devtool }} />
            <Panel.ColorPalette
              {...{
                currentPalette,
                currentColor,
                palettes,
              }}
            />
          </div>

          <div className={U.cns('relative-pos', 'editorCenter')}>
            <Canvas
              {...{
                devtool,
                size,
                scale,
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
                  data: canvasDataCurrent,
                }}
              />
            </Group>

            <Group title="Image">
              <Field
                label="Name"
                value={U.view(['currentFile', 'name', L.valueOr('')], state)}
              />

              <div>
                <Button>Clear image</Button>
              </div>

              <div>
                {/** Save current image */}
                <Button group id="save-current-image" action={saveImageEff}>
                  Save Image
                </Button>

                <Button group disabled>
                  Load Image
                </Button>
              </div>
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
                <TimeControlButton group direction="undo" history={canvasData}>
                  Undo
                </TimeControlButton>
                <TimeControlButton group direction="redo" history={canvasData}>
                  Redo
                </TimeControlButton>
              </div>

              <ClearHistoryButton history={canvasData}>
                Purge history
              </ClearHistoryButton>
            </Group>

            <Group title="Image">
              <Field label="Test value" value={test} />
            </Group>
          </div>
        </>,
        <div>
          {/* TODO: Error state */}
          something went wrong
        </div>,
      )}
    </section>
  );
}
