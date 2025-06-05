import type {Config} from "tailwindcss";

const config:Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme:{
    extend:{
      colors:{
        primary: "#FF0053",
        secondary: "#fff",

        background1: "#010816",
        background2: "#121928",
        background3: "#16162e",
      },
      fontFamily:{
        poppins: "Poppins"
      },
      boxShadow:{
        standard: "0 0 10px #8801f3"
      }
    }
  },

  plugins:[require("tailwindcss-dotted-background")],
}

export default config;