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
  carouselLimitPercentage;
  constructor(
    carouselElm: HTMLElement,
    btnRightElm: HTMLElement,
    btnLeftElm: HTMLElement,
  ) {
    this.carouselElm = carouselElm;
    this.btnRightElm = btnRightElm;
    this.btnLeftElm = btnLeftElm;
    this.carouselLimitPercentage = 20;
  }

  getScrollPercentage() {
    return (
      (this.carouselElm.scrollLeft /
        (this.carouselElm.scrollWidth - this.carouselElm.clientWidth)) *
      100
    );
  }

  isProjectInView(projectElm: HTMLElement, acceptOffset = 0.15) {
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

  changeBtnOpacity(opacityVal = "0.4") {
    if (this.getScrollPercentage() === 0) {
      this.btnLeftElm.style.opacity = opacityVal;
    } else if (this.getScrollPercentage() === 100) {
      this.btnRightElm.style.opacity = opacityVal;
    } else {
      this.btnLeftElm.style.opacity = "1";
      this.btnRightElm.style.opacity = "1";
    }
  }

  private pushToFloppyDiskProject(projectElms, dir) {
    for (let projectElm of projectElms) {
      if (
        this.isProjectInView(projectElm as HTMLElement) ||
        (dir === "right" && projectElm.getBoundingClientRect().left < 0) ||
        (dir === "left" && projectElm.getBoundingClientRect().left > 0)
      )
        continue;

      let pushLeftValue =
        projectElm.getBoundingClientRect().left -
        this.carouselElm.getBoundingClientRect().left +
        this.carouselElm.scrollLeft;
      this.carouselElm.scrollTo({
        left: pushLeftValue,
        behavior: "smooth",
      });
      break;
    }
  }

  btnRightClicked(e: HTMLElement) {
    if (this.getScrollPercentage() > 100 - this.carouselLimitPercentage) {
      let pushLeftValue =
        this.carouselElm.scrollWidth - this.carouselElm.clientWidth;
      this.carouselElm.scrollTo({
        left: pushLeftValue,
        behavior: "smooth",
      });
      return;
    }
    // Get all floppy disks that are NOT dialog
    const projectElms = Array.from(this.carouselElm.children).filter(
      (elm) => elm.tagName.toLowerCase() !== "dialog",
    );

    this.pushToFloppyDiskProject(projectElms, "right");
  }

  btnLeftClicked(e: HTMLElement) {
    if (this.getScrollPercentage() < this.carouselLimitPercentage) {
      let pushLeftValue = 0;
      this.carouselElm.scrollTo({
        left: pushLeftValue,
        behavior: "smooth",
      });
      return;
    }
    // Get all floppy disks that are NOT dialog
    const projectElms = Array.from(this.carouselElm.children)
      .filter((elm) => elm.tagName.toLowerCase() !== "dialog")
      .reverse();

    this.pushToFloppyDiskProject(projectElms, "left");
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
