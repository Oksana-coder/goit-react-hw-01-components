import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import "./FriendList.scss";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id}  className="item">
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FriendList;