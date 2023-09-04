import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
<table className={css.table}>

  <thead>
    <tr>
      <th className={css.tableUp}>Type</th>
      <th className={css.tableUp}>Amount</th>
      <th className={css.tableUp}>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => {
    return (
    <tr key={item.id}>
      <td className={css.tableDown}>{item.type}</td>
      <td className={css.tableDown}>{item.amount}</td>
      <td className={css.tableDown}>{item.currency}</td>
    </tr>
    )
})}
  </tbody>
</table>
    )
}



PropTypes.TransactionHistory = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        items: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    )
}