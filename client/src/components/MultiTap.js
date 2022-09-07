import React from "react";

var numTaps = 0;

const MultiTap = (props) => {
  const {
    delay = 200,
    onSingleTap = () => {},
    onDoubleTap = () => {},
    onTripleTap = () => {},
    onNTaps = () => {},
    children,
  } = props;

  const handleTaps = () => {
    if (numTaps === 0) {
      setTimeout(() => {
        switch (numTaps) {
          case 1:
            onSingleTap();
            break;
          case 2:
            onDoubleTap();
            break;
          case 3:
            onTripleTap();
            break;
          default:
            onNTaps(numTaps);
            break;
        }

        numTaps = 0;
      }, delay);
    }

    numTaps++;
  };

  return (
    <div {...props} onClick={handleTaps}>
      {children}
    </div>
  );
};

export default MultiTap;
