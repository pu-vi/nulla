export const Badge = ({ value, update, remove }) => (
  <section className="p-badge my-4">
    <span className="p-badge-content">{value}</span>
    &#160;<button className="p-badge-button">&#10005;</button>
  </section>
);
