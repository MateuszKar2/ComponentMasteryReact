import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export const FriendList = ({avatar, name, isOnline}) => {
    return (
        <ul className="friend-list">
            <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" 
             src={avatar}
             alt="User avatar" 
             width="48" />
            <p className="name">{name}</p>
            </li>
        </ul>
    )
}


PropTypes.FriendList = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}