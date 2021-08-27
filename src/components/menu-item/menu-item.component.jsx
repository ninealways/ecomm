import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, id, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl}) no-repeat center center/cover`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);