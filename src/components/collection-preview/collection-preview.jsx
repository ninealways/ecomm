import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherProps}) => {
            return <CollectionItem key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
