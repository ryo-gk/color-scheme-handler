import WebStorage from "./storage/WebStorage"

export type ColorSchemeType = 'light' | 'dark'


const COLOR_SCHEME = 'color-scheme'

export function reflectCurrentColorScheme (): ColorSchemeType {
  if (isCurrentColorSchemeDark()) {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
  }

  setColorScheme(getCurrentColorScheme())
  return getCurrentColorScheme()
}

export function switchCurrentColorScheme () {
  const oldColor = getCurrentColorScheme()
  const newColor = oldColor === 'light' ? 'dark' : 'light'

  setColorScheme(newColor)
}

export function setColorScheme(type: ColorSchemeType) {
  const storage = new WebStorage('session')
  storage.set(COLOR_SCHEME, type)

  if (type === 'dark') {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
  }
}

export function isCurrentColorSchemeDark () {
  return getCurrentColorScheme() === 'dark'
}

export function getCurrentColorScheme () : ColorSchemeType {
  const storage = new WebStorage('session')
  if (storage.get(COLOR_SCHEME) == null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } else {
    return storage.get(COLOR_SCHEME) as ColorSchemeType
  }
}