export class Email {
    static validate(email: string): boolean {
        if (!email) {
            return false
        }
        if (email.length > 320) {
            return false
        }
        const [local, domain] = email.split('@')
        return !(local.length > 64 || domain.length > 255);

    }
}
