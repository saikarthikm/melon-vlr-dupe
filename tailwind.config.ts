import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#2c3237",
        panel: "#3a4047",
        panelDark: "#24292e",
        border: "#4a5058",
        text: "#e5e7eb",
        muted: "#9ca3af",
        red: "#ff4655",
        green: "#00e676",
      },
    },
  },
  plugins: [],
} satisfies Config;
