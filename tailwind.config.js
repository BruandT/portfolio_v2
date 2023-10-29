function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}


module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'anek-malayalam': ['Anek Malayalam', 'sans'],
      'instrument-sans': ['Instrument Sans', 'sans'],
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--text-base'),
          color: withOpacity('--text-color'),
          input: withOpacity('--input'),
          border: withOpacity('--border'),
        },
      },
      backgroundColor: {
        skin: {
          background: withOpacity('--background'),
          foreground: withOpacity('--foreground'),
          primary: withOpacity('--primary'),
          secondary: withOpacity('--secondary'),
          input: withOpacity('--input'),
          border: withOpacity('--border'),
        },
      },      
    },
  },
  plugins: [],
}