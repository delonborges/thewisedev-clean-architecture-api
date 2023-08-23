import {Email} from "./email";

describe('Email validation', () => {
    test('should accept valid email', () => {
        const email = 'delon@email.com'
        expect(Email.validate(email)).toBeTruthy()
    })
    test('should not accept null strings', () => {
        const email = null
        // @ts-ignore
        expect(Email.validate(email)).toBeFalsy()
    })
    test('should not accept empty strings', () => {
        const email = ''
        expect(Email.validate(email)).toBeFalsy()
    })
    test('should not accept local part larger than 64 chars', () => {
        const email = 'l'.repeat(65) + '@mail.com'
        expect(Email.validate(email)).toBeFalsy()
    })
    test('should not accept domain part larger than 255 chars', () => {
        const email = 'local@' + 'd'.repeat(252) + '.com'
        expect(Email.validate(email)).toBeFalsy()
    })
    test('should not accept strings larger than 320 chars', () => {
        const email = 'l'.repeat(64) + '@' + 'd'.repeat(252) + '.com'
        expect(Email.validate(email)).toBeFalsy()
    })
})