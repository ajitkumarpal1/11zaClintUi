/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/images/woodbg.svg')",
      },
      colors: {
        primary: "#09af72",
        "bg-primary": "#09af72",
        darkblue: "#0d163f",
        secondary: "#f8f8f8",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents(require("./public/tailwind/tailwind.custom.js"));
    },
  ],
};
