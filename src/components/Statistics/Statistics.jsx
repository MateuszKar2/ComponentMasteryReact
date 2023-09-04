import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({title, stats}) => {
  return  (
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.list}>
    {
  stats.map(el => {
    const colorList = { backgroundColor: getRandomHexColor() };
    return (
      <li className={css.item} style={colorList} key={el.id}>
      <span className={css.label}>{el.label}</span>
      <span className={css.percentage}>{el.percentage}%</span>
    </li>
    );
  })
}
  </ul>
</section>
    )
}
(console.log(Statistics));

PropTypes.Statistics = {
  id: PropTypes.number,
  title: PropTypes.string,
  stats: PropTypes.number,
};