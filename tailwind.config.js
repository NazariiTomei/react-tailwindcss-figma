module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        600: "600",
        400: "400",
      },
      fontSize: {
        "48px": "48px",
        "20px": "20px",
      },
      lineHeight: {
        "62.4px": "62.4px",
        "26px": "26px",
      },
      backgroundImage: {
        "gradient-90": "linear-gradient(90deg, #6CE7E4 0%, #8F4AE3 100%)",
      },
    },
  },
  plugins: [],
};
