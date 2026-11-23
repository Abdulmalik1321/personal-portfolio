/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        stock: "#F3F5F8",
        ink: {
          DEFAULT: "#12151C",
          2: "#454C5A",
          3: "#6A7180",
        },
        rule: "#DCE0E7",
        finance: {
          DEFAULT: "#0B7A53",
          deep: "#075C3E",
          mist: "#E6F4EE",
          tint: "#E3F2EB",
        },
        eng: {
          DEFAULT: "#2848D6",
          deep: "#1D36A8",
          tint: "#E7ECFC",
        },
        ai: {
          DEFAULT: "#F2A71B",
          deep: "#8A5B00",
          tint: "#FDF1DA",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-archivo)",
          "var(--font-readex)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};
