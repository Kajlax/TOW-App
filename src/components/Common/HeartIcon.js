import React from "react";
import { Rating } from "semantic-ui-react";

const heartStyle = {
  marginRight: "30px",
};

export const HeartIcon = ({ onClick, isFavourite }) => {
  return <Rating icon="heart" defaultRating={isFavourite ? 1 : 0} maxRating={1} size="large" style={heartStyle} onClick={onClick} />;
};
