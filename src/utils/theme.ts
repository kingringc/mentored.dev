export interface Theme {
  primary: {
    darker: string
    main: string
    /**
     * # LIGHTER PRIMARY COLOR
     *  - light theme: "rgba(71,71,71, 0.4)",
     *  - dark theme: unimplemented!
     */
    lighter: string
  }
  secondary: {
    main: string
  }
  background: {
    main: string
    darker: string
  }
  focus: {
    main: string
    lighter: string
  }
}

const lightTheme: Theme = {
  primary: {
    darker: '#2A2A2A',
    main: '#474747',
    lighter: 'rgba(71,71,71, 0.4)'
  },
  secondary: {
    main: '#ffffff'
  },
  background: {
    main: '#F3F3F3',
    darker: ''
  },
  focus: {
    main: '#2574A9',
    lighter: 'rgba(37,116,169, 0.3)'
  }
}

const darkTheme: Theme = {
  focus: {
    lighter: '',
    main: ''
  },
  primary: {
    main: '#F3F3F3',
    darker: '',
    lighter: ''
  },
  secondary: {
    main: '#000'
  },
  background: {
    darker: '#2A2A2A',
    main: '#474747'
  }
}

const theme = {
  lightTheme,
  darkTheme
}

// export type Theme = typeof theme;

export default theme
