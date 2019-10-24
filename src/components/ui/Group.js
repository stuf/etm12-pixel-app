import * as React from 'karet';

export default function Group({ children, title }) {
  return (
    <section className="group">
      <header className="group__header">{title}</header>

      <div className="group__content">{children}</div>
    </section>
  );
}
