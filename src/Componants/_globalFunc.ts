// ? To Give the click effect on Phone devices
export const phonetBtnClick = {
  onTouchStart: (e) => {
    e.currentTarget.style.transform = "scale(1.5)";
  },
  onTouchEnd: (e) => {
    e.currentTarget.style.transform = "scale(1)";
  },
};

// ? To give the feel of touching a button on mobile devices
export const urlLink = {
  ...phonetBtnClick,
  onMouseDown: (e) => {
    e.currentTarget.style.color = "rgb(100, 70, 200)";
  },
  onMouseUp: (e) => {
    e.currentTarget.style.color = "rgb(40, 65, 184)";
  },
};

// ? To control project carousel
export class projectCarouselClass {
  carouselElm: HTMLElement;
  btnRightElm: HTMLElement;
  btnLeftElm: HTMLElement;
  constructor(
    carouselElm: HTMLElement,
    btnRightElm: HTMLElement,
    btnLeftElm: HTMLElement,
  ) {
    this.carouselElm = carouselElm;
    this.btnRightElm = btnRightElm;
    this.btnLeftElm = btnLeftElm;
  }

  getScrollPercentage() {
    return (
      (this.carouselElm.scrollLeft /
        (this.carouselElm.scrollWidth - this.carouselElm.clientWidth)) *
      100
    );
  }

  isProjectInView(projectElm: HTMLElement, acceptOffset = 0.2) {
    const leftValue =
      projectElm.getBoundingClientRect().left -
      this.carouselElm.getBoundingClientRect().left;

    const rightValue =
      this.carouselElm.getBoundingClientRect().right -
      projectElm.getBoundingClientRect().right;

    const projectTarget = (projectElm.clientWidth * acceptOffset) / 2;

    if (
      leftValue + projectTarget >= 0 &&
      leftValue + projectTarget <= this.carouselElm.clientWidth &&
      rightValue + projectTarget >= 0 &&
      rightValue + projectTarget <= this.carouselElm.clientWidth
    )
      return true;

    return false;
  }

  btnRightClicked(e: HTMLElement) {
    // Get all floppy disks that are NOT dialog
    const projectElms = Array.from(this.carouselElm.children).filter(
      (elm) => elm.tagName.toLowerCase() !== "dialog",
    );
    let pushLeftValue;
    // for (let projectElm of projectElms) {
    //   console.log(this.isProjectInView(projectElm as HTMLElement));
    // }

    for (let index = 0; index < projectElms.length; index++) {
      let projectElm = projectElms[index];
      // console.log(index, this.isProjectInView(projectElm as HTMLElement));
      if (
        this.isProjectInView(projectElm as HTMLElement) ||
        projectElm.getBoundingClientRect().left < 0
      )
        continue;

      pushLeftValue =
        projectElm.getBoundingClientRect().left -
        this.carouselElm.getBoundingClientRect().left +
        this.carouselElm.scrollLeft;
      break;
    }
    console.log("*****");
    this.carouselElm.scrollTo({
      left: pushLeftValue,
      behavior: "smooth",
    });
  }

  printCarouselElm() {
    console.log(this.carouselElm);
  }

  printBtnRightElm() {
    console.log(this.btnRightElm);
  }

  printBtnLeftElm() {
    console.log(this.btnLeftElm);
  }
}
