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
  //     primary: "#FF0053",
//     primary: "#3A86FF",     // blue
//        primary: "#06D6A0",     // green
//      primary: "#9B5DE5",     // purple
//        primary: "#FF69B4",     // pink
//       primary: "#20C997",     // teal
     primary: "#6610F2",     // indigo
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

//s