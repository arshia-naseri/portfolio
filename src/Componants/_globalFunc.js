/*
    ? To Give the click effect on Phone devices
*/
export const phonetBtnClick = {
  onTouchStart: (e) => {
    e.currentTarget.style.transform = "scale(1.5)";
  },
  onTouchEnd: (e) => {
    e.currentTarget.style.transform = "scale(1)";
  },
};

export const urlLink = {
  ...phonetBtnClick,
  onMouseDown: (e) => {
    e.currentTarget.style.color = "rgb(100, 70, 200)";
  },
  onMouseUp: (e) => {
    e.currentTarget.style.color = "rgb(40, 65, 184)";
  },
};
