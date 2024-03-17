;/ @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "gray-20": "#F8F4EB",
                "gray-50": "#EFE6E6",
                "gray-70": "#F6F6F6",
                "gray-80": "#F1EFF6",
                "gray-100": "#DFCCCC",
                "gray-400": "#9CA3AF",
                "gray-500": "#5E0000",
                "gray-input": "#C9CFD8",
                "gray-disabled": "#9CA3AF",
                "back-0": "#fcfcfc",
                "primary-100": "#FFE1E0",
                "primary-200": "#f8a6a3",
                "primary-300": "#EA5857",
                "primary-400": "#EA5858",
                "primary-500": "#FF6B66",
                "primary-600": "#FDF0E9",
                "primary-700": "#fceadf",
                "secondary-300": "#fcd72b",
                "secondary-400": "#FFCD58",
                "secondary-500": "#FFC132",
                "secondary-600": "#DAAE28",
            },
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            content: {},
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },
    },
    plugins: [],
}
