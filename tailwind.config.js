module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#111A26",
        "border-blue": "#8F4AE3",
        "checked-blue": "#1D4ED8",
      },
      height: {
        '12': '3rem',
        '14': '3.5rem',
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        600: "600",
        400: "400",
      },
      fontSize: {
        base: "16px",
        sm: "14px",
        lg: "18px",
        xl: "20px",
      },
      spacing: {
        4: "1rem",
      },
      lineHeight: {
        tight: "1.25",
        snug: "1.375",
        6: "1.5rem",
        7: "1.75rem",
      },
      backgroundImage: {
        "gradient-90": "linear-gradient(90deg, #6CE7E4 0%, #8F4AE3 100%)",
      },
    },
  },
  plugins: [],
};
