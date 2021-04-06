export const Badge = ({ value, remove }) => (
  <section className="p-badge">
    <span className="p-badge-content">{value}</span>
    &#160;
    <button className="p-badge-button" onClick={remove.bind(this, value)}>
      &#10005;
    </button>
  </section>
);
