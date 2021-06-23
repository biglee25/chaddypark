module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      primarygreen: '#87C82D',
      primaryyellow: '#FCD215',
    },
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/hero-image.jpg')",
       })
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
