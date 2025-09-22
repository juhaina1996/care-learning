// 
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Pro", "sans-serif"], // custom family
      },
      letterSpacing: {
        tightest: "-0.03em", // matches -3%
      },
      fontSize: {
        35: "35px", // custom size
      },
      lineHeight: {
        140: "140%", // custom line-height
      },
    },
  },
  plugins: [],
};

export default config;
