import * as React from 'karet';
import * as U from 'karet.util';

export default function Group({ children, title }) {
  return (
    <section className="group">
      {U.when(title, <header className="group__header">{title}</header>)}
      <div className="group__content">{children}</div>
    </section>
  );
}
