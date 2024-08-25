/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-default-default": "#fff",
        darkslategray: {
          "100": "#36454f",
          "200": "#202c40",
        },
        slategray: {
          "100": "#696984",
          "200": "#626381",
          "300": "#5f5f7e",
        },
        dimgray: "#5b5b5b",
        gray: {
          "100": "#252641",
          "200": "rgba(255, 255, 255, 0.3)",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(29, 29, 45, 0.5)",
          "600": "#94918a",
          "800": "#121212",
        },
        lightseagreen: "#49bbbd",
        darkslateblue: {
          "100": "#55578d",
          "200": "#525596",
          "300": "#2f327d",
          "400": "rgba(87, 89, 176, 0.5)",
          "500": "rgba(23, 27, 65, 0.1)",
        },
        lightslategray: "#80819a",
        lightsteelblue: {
          "100": "#ced8ff",
          "200": "#b5bfe6",
          "300": "#bdbdd1",
          "400": "rgba(201, 211, 231, 0.4)",
        },
        salmon: "#f77766",
        orange: "#ffa500",
        black: "#000",
        "border-default-default": "#d9d9d9",
        gainsboro: {
          "100": "#e6e6e6",
          "300": "rgba(230, 230, 230, 0.3)",
          "400": "rgba(230, 230, 230, 0.09)",
          "500": "rgba(217, 217, 217, 0)",
        },
        navy: "#000080",
        darkblue: {
          "100": "#3333b3",
          "200": "rgba(51, 51, 179, 0.09)",
        },
        tomato: "#eb493a",
        darkgray: {
          "100": "#a8a8b6",
          "200": "#979ca5",
        },
        lavender: {
          "100": "#d3e7ff",
          "200": "#d4e1fb",
          "300": "#cde4ff",
        },
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#efefef",
          "300": "#eaeaea",
        },
        cornflowerblue: "rgba(136, 167, 227, 0.1)",
        crimson: {
          "100": "#f13c3c",
          "200": "#e13468",
        },
        royalblue: {
          "100": "#687ef3",
          "200": "#3464e1",
        },
        deepskyblue: {
          "100": "#73bcff",
          "200": "#3ac6f2",
          "300": "#54aff0",
          "400": "#23bdee",
          "500": "#29b9e7",
        },
        mediumspringgreen: "#34e7a5",
        hotpink: "#f3538c",
        mediumaquamarine: "#41be91",
        lightcyan: {
          "100": "#d8f9ed",
          "200": "#cef3ff",
        },
        steelblue: {
          "100": "#717fb0",
          "200": "#486f9c",
          "300": "#217dbd",
        },
        sandybrown: "#f3a268",
        mediumslateblue: "#545ae8",
        pink: "#ffcdcd",
        indianred: "#9e5555",
        lightgoldenrodyellow: "#d7ffce",
        seagreen: "#4e8c3f",
        limegreen: "#68f146",
        dodgerblue: "#3188ef",
        cadetblue: "#44869b",
        azure: "#f2fdff",
        lightskyblue: "#9fd6ff",
        midnightblue: "rgba(35, 39, 125, 0.5)",
        silver: "#c4c4c4",
        turquoise: "#00cbb8",
        palevioletred: {
          "100": "#d8577e",
          "200": "#bf3d63",
        },
        mediumseagreen: "#2ebb5e",
        antiquewhite: {
          "100": "#f7efd8",
          "200": "#fbecd7",
          "300": "#ded6bf",
        },
        chocolate: "#f88b3d",
        darkorange: "#f48c06",
        "text-default-secondary": "#757575",
        "text-default-default": "#1e1e1e",
        "background-brand-default": "#2c2c2c",
        "text-brand-on-brand": "#f5f5f5",
        "text-neutral-default": "#303030",
        "text-default-tertiary": "#b3b3b3",
        beige: "#f7f3dd",
        lemonchiffon: "#fff7cd",
        "gray-4": "#bdbdbd",
        gold: {
          "100": "#f3da53",
          "200": "#ffd143",
          "300": "#ffc000",
        },
        lightgray: "#ccc",
        palegoldenrod: "#f1e6ac",
        darkolivegreen: "#3c652f",
      },
      spacing: {
        "space-400": "16px",
        "space-200": "8px",
        "space-300": "12px",
        "space-600": "24px",
      },
      fontFamily: {
        poppins: "Poppins",
        "nunito-sans": "'Nunito Sans'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        heading: "Inter",
        abel: "Abel",
        manrope: "Manrope",
        roboto: "Roboto",
        alatsi: "Alatsi",
        jost: "Jost",
      },
      borderRadius: {
        "41xl": "60px",
        "61xl": "80px",
        xl: "20px",
        mid: "17px",
        "3xl-1": "22.1px",
        "3xl": "22px",
        "lg-8": "18.8px",
        "37xl-5": "56.5px",
        "6xs-6": "6.6px",
        "12xs-7": "0.7px",
        "8xs-2": "4.2px",
        "12xs-4": "0.4px",
        "19xl-7": "38.7px",
        "lg-2": "18.2px",
        "53xl-8": "72.8px",
        mini: "15px",
        "16xl": "35px",
        "3xs": "10px",
        "radius-200": "8px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "7xl": "26px",
      "2xl": "21px",
      "13xl": "32px",
      lgi: "19px",
      "5xl": "24px",
      "17xl": "36px",
      "10xl": "29px",
      "41xl": "60px",
      "29xl": "48px",
      sm: "14px",
      "11xl": "30px",
      "xl-7": "20.7px",
      mid: "17px",
      "base-9": "16.9px",
      "3xl-6": "22.6px",
      "sm-3": "13.3px",
      "21xl": "40px",
      "4xs-4": "8.4px",
      "base-8": "16.8px",
      "12xl": "31px",
      "6xl": "25px",
      "25xl": "44px",
      "16xl": "35px",
      "35xl": "54px",
      "24xl": "43px",
      "3xs": "10px",
      xs: "12px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};