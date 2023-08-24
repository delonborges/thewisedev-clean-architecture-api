// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Email {
  static validate (email: any): boolean {
    if (email == null || email === '') {
      return false
    }
    if (email.length > 320) {
      return false
    }
    const [local, domain] = email.split('@')
    return !(local.length === 0 || local.length > 64 || domain.length === 0 || domain.length > 255)
  }
}
