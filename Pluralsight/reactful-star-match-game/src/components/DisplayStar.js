import React from "react"
import Utils from "./Utils";
const DisplayStar = props => {
    return (
        Utils.range(1, props.count).map(startId =>
        <div
          key={startId}
          className="star"
        />
      )
    );
  };

  export default DisplayStar;