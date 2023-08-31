import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile  = ({username, tag, location, avatar, stats}) => {
return (
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="quantity">Followers</span>
      <span className="label">{stats.followers}</span>
    </li>
    <li>
      <span className="quantity">Views</span>
      <span className="label">{stats.views}</span>      
    </li>
    <li>
      <span className="quantity">Likes</span>
      <span className="label">{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

PropTypes.Profile = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}