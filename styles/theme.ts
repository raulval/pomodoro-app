import { Kumbh_Sans, Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const kumbh = Kumbh_Sans({ subsets: ["latin"] });

const Theme = {
  colors: {
    background: "#1e213f",
    primary: {
      main: "#7B89F4",
      text: "#d7e0ff",
    },
    secondary: {
      main: "#161932",
      text: "#5c6a86",
    },
    terciary: {
      text: "#161932",
    },
  },
  themes: {
    color1: "#f87070",
    color2: "#70f3f8",
    color3: "#d881f8",
  },
  fonts: {
    main: poppins.style.fontFamily,
    secundary: kumbh.style.fontFamily,
  },
};

export default Theme;
