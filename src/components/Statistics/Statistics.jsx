import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({id, title, stats}) => {
  return  (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
    {
  id.map(el => {
    const colorList = { backgroundColor: getRandomHexColor() };
    return (
      <li className="item" style={colorList} key={el.id}>
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    );
  })
}
    {/* <li className="item">
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
    </li> */}
  </ul>
</section>
    )
}


PropTypes.Statistics = {
  id: PropTypes.number,
  title: PropTypes.string,
  stats: PropTypes.number,
};