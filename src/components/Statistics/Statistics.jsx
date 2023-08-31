import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({title, stats}) => {
  return  (
    <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
    {
  stats.map(el => {
    const colorList = { backgroundColor: getRandomHexColor() };
    return (
      <li className="item" style={colorList} key={el.id}>
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}%</span>
    </li>
    );
  })
}
  </ul>
</section>
    )
}


PropTypes.Statistics = {
  id: PropTypes.number,
  title: PropTypes.string,
  stats: PropTypes.number,
};