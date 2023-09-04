import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const colorTrue = <div style={{color: "green"}}/>;
const colorFalse = <div style={{color: "red"}}/>;

export const FriendListItem = ({avatar, name, isOnline, }) => {
    return (
            <li className={css.item}>
                <span className={css.status}>
                {{isOnline} === true ? colorTrue : colorFalse }
                </span>
                    <img className={css.avatar} 
                        src={avatar}
                        alt="User avatar" 
                        width="48" />
                <p className={css.name}>{name}</p>
            </li>
    )
}

PropTypes.FriendListItem = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}