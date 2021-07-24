module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/hero-image.jpg')",
        'teams-bg': "url('/images/teams.jpg')",
        'disablity-bg': "url('/images/disablity.jpg')",
        'adultfun-bg': "url('/images/adultfun.jpg')",
        'steppers-bg': "url('/images/steppers.jpg')",
        'community-bg': "url('/images/community.jpg')",
        'voluntaryjobs-bg': "url('/images/voluntaryjobs.jpg')",
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
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
