/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "hsl(213, 96%, 18%)",
        primary2: "hsl(243, 100%, 62%)",
        primary3: "hsl(228, 100%, 84%)",
        primary4: "hsl(206, 94%, 87%)",
        primary5: "hsl(354, 84%, 57%)",
        neutral1: "hsl(231, 11%, 63%)",
        neutral2: "hsl(229, 24%, 87%)",
        neutral3: "hsl(217, 100%, 97%)",
        neutral4: "hsl(231, 100%, 99%)",
        neutral5: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "serif"], // Add a custom name
      },
    },
  },
  plugins: [],
};
