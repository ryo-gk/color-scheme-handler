import WebStorage from "./storage/WebStorage"

export type ColorSchemeType = 'light' | 'dark'

const COLOR_SCHEME = 'color-scheme'

export function reflectColorScheme (): ColorSchemeType {
  if (isColorSchemeDark()) {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
  }

  setColorScheme(getColorScheme())
  return getColorScheme()
}

export function switchColorScheme () {
  const oldColor = getColorScheme()
  const newColor = oldColor === 'light' ? 'dark' : 'light'

  setColorScheme(newColor)
}

export function isColorSchemeDark () {
  return getColorScheme() === 'dark'
}

export function getColorScheme () : ColorSchemeType {
  const storage = new WebStorage('session')
  if (storage.get(COLOR_SCHEME) == null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } else {
    return storage.get(COLOR_SCHEME) as ColorSchemeType
  }
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
