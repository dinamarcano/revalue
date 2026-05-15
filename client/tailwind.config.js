export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2EBB4E",
        accent: "#F5F5A0",
        textGray: "#A1A4B2",
        inputGray: "#F2F3F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}