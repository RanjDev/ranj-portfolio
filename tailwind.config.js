module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        white: "0 0 1px #fff",
        black: "0 0 1px #000",
      },
      spacing: {
        128: "32rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      // keyframes: {
      //   animateIn: {
      //     "0%": { transform: "translateX(500px)" },
      //     "100%": { transform: "translateX(0)" },
      //   },
      // },
      // transitionProperty: {
      //   height: "height",
      // },
    },
  },
  plugins: [],
};
