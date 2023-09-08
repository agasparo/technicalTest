const configurationsServiceKeys = [
  'HOST',
  'PORT',
  'USERNAME',
  'PASSWORD',
  'DB_NAME',
] as const
export type ConfigurationsServiceKey = (typeof configurationsServiceKeys)[number]

class ConfigurationsService {
  constructor() {
    this.ensureValues(configurationsServiceKeys)
  }

  get HOST(): string {
    return this.getValue('HOST') ?? ''
  }

  get PORT(): number {
    return Number(this.getValue('PORT')) ?? 3306
  }

  get USERNAME(): string {
    return this.getValue('USERNAME') ?? ''
  }

  get PASSWORD(): string {
    return this.getValue('PASSWORD') ?? ''
  }

  get DB_NAME(): string {
    return this.getValue('DB_NAME') ?? ''
  }

  /*******************************************************************************/

  getValue(key: ConfigurationsServiceKey, throwOnMissing = true) {
    const environmentValue = process.env[key]

    if (environmentValue === undefined && throwOnMissing) {
      console.log(`config error - missing env.${key}`)
    }

    return environmentValue
  }

  ensureValues(keys: readonly ConfigurationsServiceKey[]) {
    keys.forEach((k) => this.getValue(k, true))
    return this
  }
}

export const configurationsService = new ConfigurationsService()
