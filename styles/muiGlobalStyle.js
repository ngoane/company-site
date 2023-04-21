export const MuiGlobalStyle = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Lato, sans-serif",
  },
};

export const customTheme = {
  palette: {
    primary: {
      main: "#9138E8",
    },

    customGreen: "#2D9350",

    accent: "#FCAE39",

    accentPink: "#E31276",

    customRed: "#E31276",

    whiteBg: "#FFFFFF",

    altBg: "#F8F9FA",

    violetBg: "#EFE9F5",
  },

  //decleration of different font styles.

  typography: {
    color: "#3A3A3A",

    headerMain: {
      fontSize: 57,
      fontWeight: 400,
      fontFamily: "Ubuntu, sans-serif",
    },

    headerMainBold: {
      fontSize: 57,
      fontWeight: "bold",
      fontFamily: "Ubuntu, sans-serif",
    },

    headlineMain: {
      fontSize: 32,
      fontWeight: 400,
      fontFamily: "Ubuntu, sans-serif",
    },

    headlineMainBold: {
      fontSize: 32,
      fontWeight: "bold",
      fontFamily: "Ubuntu, sans-serif",
    },

    title: {
      fontSize: 22,
      fontWeight: 400,
      fontFamily: "Ubuntu, sans-serif",
    },

    titleBold: {
      fontSize: 22,
      fontWeight: "bold",
      fontFamily: "Ubuntu, sans-serif",
    },

    body: {
      fontSize: 16,
      fontWeight: 400,
    },

    bodyBold: {
      fontSize: 16,
      fontWeight: "bold",
    },

    label: {
      fontSize: 14,
      fontWeight: 400,
    },

    labelBold: {
      fontSize: 14,
      fontWeight: "bold",
    },

    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a semantic html tags
          headerMain: "h1",
          headerMainBold: "h1",
          headlineMain: "h2",
          headlineMainBold: "h2",
          title: "h4",
          titleBold: "h4",
          body: "p",
          bodyBold: "p",
          label: "h5",
          labelBold: "h5",
          caption: "h6",
        },
      },
    },
  },
};
