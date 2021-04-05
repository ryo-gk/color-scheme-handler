export type StorageType = 'local' | 'session'
export default class WebStorage {
  private storage: Storage

  constructor (type: StorageType) {
    this.storage = type === 'local'
      ? window.localStorage
      : window.sessionStorage
  }

  get (key: string) {
    return this.storage.getItem(key)
  }

  set (key: string, value: string) {
    this.storage.setItem(key, value)
  }
}