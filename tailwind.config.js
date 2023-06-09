/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "relative",
    "z-10",
    "flex",
    "justify-center",
    "items-center",
    "h-full",
    "text-6xl",
    "text-white",
    "font-bold",
    "relative",
    "h-screen",
    "w-screen",
    "absolute",
    "object-cover",
    "items-end",
    "bottom-20",
    "px-4",
    "py-2",
    "text-white",
    "border",
    "border-white",
    "rounded",
    "hover:border-blue-500",
    "transition",
    "duration-300",
    "ease-in-out",
    "focus:outline-none",
    "relative",
    "z-10",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-full",
    "mx-5",
    "mt-8",
    "blur-sm",
    "backdrop-brightness-30",
    "bg-blue-600/30",
    "backdrop-brightness-10",
    "text-lg",
    "hover:border-white",
    "border-blue-500",
    "underline",
    "px-20",
    "px-5",
    "text-base",
    "px-2",
    "text-5xl",
    "mx-4",
    "px-2",
    "overflow-auto",
    "overflow-hidden"
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
