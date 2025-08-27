module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#00FFFF", // electric-blue
        secondary: "#39FF14", // neon-green
        accent: "#FF1493", // hot-pink
        
        // Background Colors
        background: "#000000", // pure-black
        surface: "#1A1A1A", // dark-surface
        
        // Text Colors
        "text-primary": "#FFFFFF", // white
        "text-secondary": "#E0E6FF", // light-blue-100
        
        // Status Colors
        success: "#39FF14", // neon-green
        warning: "#FF4500", // orange-red
        error: "#FF1493", // hot-pink
        
        // Additional Utility Colors
        "electric-blue": "#00FFFF", // primary
        "neon-green": "#39FF14", // secondary
        "hot-pink": "#FF1493", // accent
        "pure-black": "#000000", // background
        "dark-surface": "#1A1A1A", // surface
        "light-blue-100": "#E0E6FF", // text-secondary
        "orange-red": "#FF4500", // warning
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      boxShadow: {
        'neon': '0 0 20px currentColor',
        'neon-sm': '0 0 10px currentColor',
        'neon-lg': '0 0 30px currentColor',
        'subtle': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'cyberpunk': '0 0 20px rgba(0, 255, 255, 0.3)',
        'green-neon': '0 0 20px rgba(57, 255, 20, 0.3)',
        'pink-neon': '0 0 20px rgba(255, 20, 147, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'neon-flicker': 'neonFlicker 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px currentColor' },
          '100%': { boxShadow: '0 0 30px currentColor, 0 0 40px currentColor' },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderWidth: {
        '1': '1px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}