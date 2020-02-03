module.exports = {
  theme: {
    backgroundColor: {
        page: 'var(--page-background-color)',
        card: 'var(--card-background-color)',
        button: 'var(--button-background-color)',
        header: 'var(--header-background-color)'
    },
    extend: {
        colors: {
            'gray': 'rgba(0, 0, 0, 0.4)',
            'gray-light': '#F5F6F9',
            'blue': '#47cdff',
            'blue-light': '#8ae2fe',
            'default': 'var(--text-default-color)',
            'accent': 'var(--text-accent-color)',
            'accent-light': 'var(--text-accent-light-color)',
            'muted': 'var(--text-muted-color)',
            'muted-light': 'var(--text-muted-light-color)',
        },
        boxShadow: {
            default: '0 0 5px 0 rgba(0, 0, 0, 0.08)'
        },
    },
  },
  variants: {},
  plugins: []
}
