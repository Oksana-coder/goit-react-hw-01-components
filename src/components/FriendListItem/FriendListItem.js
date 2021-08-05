import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default-user-image.svg";
import "./FriendListItem.scss";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className="status" style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
