import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCard from './user_card';

class UserBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCardOpen: false,
    };
  }
  openCard() {
    this.setState({ userCardOpen: true });
  }
  closeCard() {
    this.setState({ userCardOpen: false });
  }
  render() {
    const { user, theme } = this.props;
    let imageSource = 'res/images/invis.png';
    if (user.avatar.i) {
      imageSource = `https://avatars.devrant.io/${user.avatar.i}`;
    }
    return (
      <div className="user_badge">
        <div className="image" onClick={() => this.openCard()}>
          <img alt="" src={imageSource} style={{ background: `#${user.avatar.b}` }} />
        </div>
        { this.state.userCardOpen ?
          <UserCard userID={user.id} closeCard={() => this.closeCard()} /> : null }
        <div className="details" onClick={() => this.openCard()}>
          <p>{user.username}</p>
          <span
            className="score"
            style={{ backgroundColor: theme.user_badge.details_back }}
          >{user.score}</span>
        </div>
      </div>
    );
  }
}

UserBadge.propTypes = {
  user: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default UserBadge;
