export const Statistics = ({id, title, stats}) => {
  return  (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
{id.map(id => (
    <li className="item" key={id}>
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
))
}
</ul>

 { /* {<ul className="stat-list">
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
  </ul> }*/}
</section>
    )
}
