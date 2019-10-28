/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

function Button({ id, children, disabled, action, group }) {
  return (
    <button
      {...{
        id,
        className: U.cns('button', U.when(group, '--group')),
        disabled,
        onClick: U.actions(U.preventDefault, action),
      }}
    >
      {children}
    </button>
  );
}

export default Button;
