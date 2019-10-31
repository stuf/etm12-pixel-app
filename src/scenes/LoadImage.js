import * as React from 'karet';
import * as L from 'kefir.partial.lenses';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';
import * as FR from 'karet.fr';
import { present } from 'kefir.partial.lenses.history';

import { mkElem } from 'common/dom';
import { getContext, getImageData } from 'common/canvas';
import { fstIn, sndIn } from 'common/meta';

import Panel from 'components/layout/Panel';
import Button from 'components/ui/Button';
import Modal from 'components/ui/Modal';

export default function LoadImageScene(props) {
  const actions = U.serializer(null);

  const { state, canvasData, history } = props;
  const canvasSize = U.view(['canvas', 'size'], state);

  const loadImage = U.flatMapLatest(dataURL => {
    const img = new Image();
    img.src = dataURL;

    return K.fromEvents(img, 'load', L.get('target')).toProperty();
  });

  const files = U.view(L.rewrite(Array.from), U.atom([]));

  const uploads = U.thru(
    files,
    U.flatMapLatest(
      R.pipe(
        R.map(file => ({
          name: file.name,
          type: file.type,
          dataURL: FR.readAsDataURL(file),
        })),
        U.template,
      ),
    ),
    U.toProperty,
  );

  const firstImg = U.thru(uploads, U.view(L.first));
  const fr = U.view('dataURL', firstImg);
  const isInProg = U.mapValue(FR.isProgressing, fr);
  const hasImage = R.and(firstImg, R.not(isInProg));

  const dataURL = U.thru(
    fr,
    U.skipUnless(FR.isDone),
    U.flatMapLatest(FR.result),
  );

  const loadedImage = U.thru(dataURL, U.flatMapLatest(loadImage), U.toProperty);
  const imageSize = U.mapValue(R.props(['width', 'height']), loadedImage);
  const src = L.get('src', loadedImage);

  //

  const canvas = U.mapValue(
    ([w, h]) => mkElem('canvas', { width: w, height: h }),
    imageSize,
  );

  const ctx = getContext(canvas);
  const id = getImageData(ctx, imageSize);

  //

  const putImageEff = U.thru(
    U.template([ctx, loadedImage]),
    U.consume(([c, i]) => c.drawImage(i, 0, 0)),
  );

  //

  const loadImageEff = U.doPush(actions, () =>
    U.thru(
      id,
      U.takeFirst(1),
      U.consume(({ data, width, height }) => {
        U.holding(() => {
          canvasSize.set([width, height]);
          canvasData.view(present).set(data);
          history.push('/editor');
        });
      }),
    ),
  );

  //

  return (
    <section className={U.cns('scene-root', 'load-image-root')}>
      <>{U.sink(U.parallel([putImageEff, actions]))}</>
      <Panel>
        <Modal
          header="Load image"
          footer={
            <Button
              id="load-image"
              action={loadImageEff}
              disabled={R.not(hasImage)}
            >
              Load image
            </Button>
          }
        >
          <input
            type="file"
            accept="image/png"
            onChange={U.getProps({ files })}
          />

          <hr />

          <>
            {U.when(
              hasImage,
              <section className="loadImage__preview">
                <header className="loadImage__previewHeader">
                  Does this look right?
                </header>

                <div className="loadImage__previewContent">
                  <div className="loadImage__previewSize">
                    {fstIn(imageSize)} × {sndIn(imageSize)} pixels
                  </div>
                  <div className="loadImage__previewImage">
                    <img {...{ src }} />
                  </div>
                </div>
              </section>,
            )}
          </>
        </Modal>
      </Panel>
    </section>
  );
}
