import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem';



export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
        {friends.map(friend => (
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
            />
        ))}
        </ul>
    )
}


PropTypes.FriendList = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    )
}

