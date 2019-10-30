import * as React from 'karet';
import * as U from 'karet.util';

export default function Modal(props) {
  const { header, footer, children } = props;

  return (
    <section className="modal">
      {U.when(header, <header className="modal__header">{header}</header>)}

      <div className="modal__content">{children}</div>

      <footer className="modal__footer">{footer}</footer>
    </section>
  );
}
