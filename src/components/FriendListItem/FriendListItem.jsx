import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const colorTrue = <div style={{color: "green"}}/>;
const colorFalse = <div style={{color: "red"}}/>;

export const FriendListItem = ({avatar, name, isOnline, }) => {
    return (
            <li className="item">
                <span className="status">
                {{isOnline} === true ? colorTrue : colorFalse }
                </span>
                    <img className="avatar" 
                        src={avatar}
                        alt="User avatar" 
                        width="48" />
                <p className="name">{name}</p>
            </li>
    )
}

PropTypes.FriendListItem = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}