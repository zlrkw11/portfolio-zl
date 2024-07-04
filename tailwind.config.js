/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-0": "#272829",
        "dark-1": "#303841",
        "dark-2": "#9a9a9a",
        cyan: "#00ADB5",
        "white-2": "EEEEEE",
      },
      boxShadow: {
        lg: "0 35px 60px -15px rgba(255,255,255, 0.3)",
      },
      dropShadow: {
        lg: "0 35px 60px -15px rgba(255,255,255, 0.3)",
        custom:
          "0 0 5px #ffffff, 0 0 25px #ffffff, 0 0 50px #ffffff, 0 0 100px #ffffff",
      },

      fontFamily: {
        inter: ["inter", "sans-serif"],
        fontSize: {
          h1: [
            "3.125rem",
            {
              lineHeight: "normal",
              fontWeight: "900",
              letterSpacing: "-0.219rem",
            },
          ],
          h2: [
            "2.375rem",
            {
              lineHeight: "normal",
              letterSpacing: "-0.16625rem",
              fontWeight: "700",
            },
          ],
          h3: [
            "1.75rem",
            {
              lineHeight: "normal",
              letterSpacing: "-0.123rem",
              fontWeight: "700",
            },
          ],
          h4: [
            "1.313rem",
            {
              lineHeight: "normal",
              letterSpacing: "-0.092rem",
              fontWeight: "400",
            },
          ],
          h5: [
            "0.75rem",
            {
              lineHeight: "normal",
              letterSpacing: "0.045rem",
              fontWeight: "500",
            },
          ],
          p: [
            "1rem",
            {
              lineHeight: "normal",
              letterSpacing: "-0.07rem",
              fontWeight: "400",
            },
          ],
          small: [
            "0.75rem",
            {
              lineHeight: "normal",
              letterSpacing: "-0.015rem",
              fontWeight: "400",
            },
          ],
        },
      },
    },
    animation: {
      "text-slide-2": "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      "text-slide-3":
        "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      "text-slide-4":
        "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      "text-slide-5":
        "text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      "text-slide-6":
        "text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      "text-slide-7":
        "text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      "text-slide-8":
        "text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      typing: "typing 3s steps(60), blink .6s",
      "loop-scroll": "loop-scroll 5s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "text-slide-2": {
        "0%, 40%": {
          transform: "translateY(0%)",
        },
        "50%, 90%": {
          transform: "translateY(-33.33%)",
        },
        "100%": {
          transform: "translateY(-66.66%)",
        },
      },
      "text-slide-3": {
        "0%, 26.66%": {
          transform: "translateY(0%)",
        },
        "33.33%, 60%": {
          transform: "translateY(-25%)",
        },
        "66.66%, 93.33%": {
          transform: "translateY(-50%)",
        },
        "100%": {
          transform: "translateY(-75%)",
        },
      },
      "text-slide-4": {
        "0%, 20%": {
          transform: "translateY(0%)",
        },
        "25%, 45%": {
          transform: "translateY(-20%)",
        },
        "50%, 70%": {
          transform: "translateY(-40%)",
        },
        "75%, 95%": {
          transform: "translateY(-60%)",
        },
        "100%": {
          transform: "translateY(-80%)",
        },
      },
      "text-slide-5": {
        "0%, 16%": {
          transform: "translateY(0%)",
        },
        "20%, 36%": {
          transform: "translateY(-16.66%)",
        },
        "40%, 56%": {
          transform: "translateY(-33.33%)",
        },
        "60%, 76%": {
          transform: "translateY(-50%)",
        },
        "80%, 96%": {
          transform: "translateY(-66.66%)",
        },
        "100%": {
          transform: "translateY(-83.33%)",
        },
      },
      "text-slide-6": {
        "0%, 13.33%": {
          transform: "translateY(0%)",
        },
        "16.66%, 30%": {
          transform: "translateY(-14.28%)",
        },
        "33.33%, 46.66%": {
          transform: "translateY(-28.57%)",
        },
        "50%, 63.33%": {
          transform: "translateY(-42.85%)",
        },
        "66.66%, 80%": {
          transform: "translateY(-57.14%)",
        },
        "83.33%, 96.66%": {
          transform: "translateY(-71.42%)",
        },
        "100%": {
          transform: "translateY(-85.71%)",
        },
      },
      "text-slide-7": {
        "0%, 11.43%": {
          transform: "translateY(0%)",
        },
        "14.28%, 25.71%": {
          transform: "translateY(-12.5%)",
        },
        "28.57%, 40%": {
          transform: "translateY(-25%)",
        },
        "42.85%, 54.28%": {
          transform: "translateY(-37.5%)",
        },
        "57.14%, 68.57%": {
          transform: "translateY(-50%)",
        },
        "71.42%, 82.85%": {
          transform: "translateY(-62.5%)",
        },
        "85.71%, 97.14%": {
          transform: "translateY(-75%)",
        },
        "100%": {
          transform: "translateY(-87.5%)",
        },
      },
      "text-slide-8": {
        "0%, 10%": {
          transform: "translateY(0%)",
        },
        "12.5%, 22.5%": {
          transform: "translateY(-11.11%)",
        },
        "25%, 35%": {
          transform: "translateY(-22.22%)",
        },
        "37.5%, 47.5%": {
          transform: "translateY(-33.33%)",
        },
        "50%, 60%": {
          transform: "translateY(-44.44%)",
        },
        "62.5%, 72.5%": {
          transform: "translateY(-55.55%)",
        },
        "75%, 85%": {
          transform: "translateY(-66.66%)",
        },
        "87.5%, 97.5%": {
          transform: "translateY(-77.77%)",
        },
        "100%": {
          transform: "translateY(-88.88%)",
        },
      },
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
    },
  },
  plugins: [],
};
