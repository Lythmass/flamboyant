export const NavBarButtonConfig = {
  upper: {
    closed: {
      rotate: 0,
      translateY: 0,
      transition: {
        translateY: {
          delay: 0.2,
        },
      },
    },
    opened: {
      rotate: 45,
      translateY: 9,
      transition: {
        rotate: { delay: 0.2 },
      },
    },
  },
  mid: {
    closed: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    opened: {
      opacity: 0,
      transition: {
        delay: 0.1,
      },
    },
  },
  lower: {
    closed: {
      rotate: 0,
      translateY: 0,
      transition: {
        translateY: {
          delay: 0.2,
        },
      },
    },
    opened: {
      rotate: -45,
      translateY: -9,
      transition: {
        rotate: {
          delay: 0.2,
        },
      },
    },
  },
};
