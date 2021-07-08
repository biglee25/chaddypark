module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/hero-image.jpg')",
        'teams-bg': "url('/images/archive.jpg')",
       }),
       colors: {
        white: '#fff',
        black: '#000',
        primarygreen: '#87C82D',
        primaryyellow: '#FCD215',
      },  
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
