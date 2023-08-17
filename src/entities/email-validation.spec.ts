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
})
