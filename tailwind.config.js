module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/new-hero.webp')",
        'teams-bg': "url('/images/teams.webp')",
        'disablity-bg': "url('/images/disablity.webp')",
        'netball-bg': "url('/images/netball.webp')",
        'adultfun-bg': "url('/images/adultfun.webp')",
        'steppers-bg': "url('/images/steppers.webp')",
        'community-bg': "url('/images/community.webp')",
        'photocomp-bg': "url('/images/photocomp.webp')",
        'awards-bg': "url('/images/awards.webp')",
        'voluntaryjobs-bg': "url('/images/voluntaryjobs.webp')",
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
