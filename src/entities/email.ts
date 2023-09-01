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
    if (local.length === 0 || local.length > 64) {
      return false
    }
    if (domain.length === 0 || domain.length > 255) {
      return false
    }
    const domainParts = domain.split('.')
    return !domainParts.some(function (part: string | any[]) {
      return part.length > 63
    })
  }
}
