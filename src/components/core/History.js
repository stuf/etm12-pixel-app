import * as React from 'karet';
import * as H from 'kefir.partial.lenses.history';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import Button from 'components/ui/Button';

const defaultCountFormat = U.lift(count => `${count}`);

export function TimeControlButton(props) {
  const { children, group, history, countFormat, direction } = props;

  if (!direction) {
    return <div>Invalid configuration</div>;
  }

  const historyLenses = {
    undo: H.undoIndex,
    redo: H.redoIndex,
  };

  const count = U.view(historyLenses[direction], history);

  return (
    <Button
      {...{
        group,
        action: U.doModify(count, R.dec),
        disabled: R.equals(count, 0),
      }}
    >
      {children}
      {U.when(count, U.string`(${(countFormat || defaultCountFormat)(count)})`)}
    </Button>
  );
}

//

export function ClearHistoryButton(props) {
  const { history, group, children } = props;

  const disable = U.thru(H.indexMax(history), R.not);

  return (
    <Button {...{ group, action: U.doModify(history, H.undoForget), disable }}>
      {children}
    </Button>
  );
}
