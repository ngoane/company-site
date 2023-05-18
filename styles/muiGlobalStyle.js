export const MuiGlobalStyle = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Lato, sans-serif",
  },
  body: {
    backgroundColor: "#F8F1FF",
    color: "#3A3A3A",
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

    bodyBg: "#F8F1FF",

    altBg: "#F8F9FA",

    violetBg: "#EFE9F5",

    textColor: "#3A3A3A",
  },

  //decleration of different font styles.

  typography: {
    color: "#3A3A3A",

    adminLinkText: {
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Lato, sans-serif",
    },

    adminLinkTextBold: {
      fontSize: "1rem",
      fontWeight: 700,
      fontFamily: "Lato, sans-serif",
    },

    headerMain: {
      fontSize: "3.563rem",
      fontWeight: 400,
      fontFamily: "Ubuntu, sans-serif",
    },

    headerMainBold: {
      fontSize: "3.563rem",
      fontWeight: "bold",
      fontFamily: "Ubuntu, sans-serif",
    },

    headlineMain: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: "Ubuntu, sans-serif",
    },

    headlineMainBold: {
      fontSize: "2rem",
      fontWeight: "bold",
      fontFamily: "Ubuntu, sans-serif",
    },

    title: {
      fontSize: "1.375rem",
      fontWeight: 400,
      fontFamily: "Ubuntu, sans-serif",
    },

    titleBold: {
      fontSize: "1.375rem",
      fontWeight: "bold",
      fontFamily: "Ubuntu, sans-serif",
    },

    body: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "Lato, sans-serif",
      lineHeight: "1.5rem",
    },

    bodyBold: {
      fontSize: "1rem",
      fontWeight: "bold",
      fontFamily: "Lato, sans-serif",
      lineHeight: "1.5rem",
    },

    label: {
      fontSize: "0.875rem",
      fontFamily: "Lato, sans-serif",
      fontWeight: 400,
    },

    labelBold: {
      fontSize: "0.875rem",
      fontFamily: "Lato, sans-serif",
      fontWeight: "bold",
    },

    caption: {
      fontSize: "0.75",
      fontFamily: "Lato, sans-serif",
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
