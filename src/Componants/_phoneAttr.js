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
