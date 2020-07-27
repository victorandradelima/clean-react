import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors/invalid-field-validation'

describe('RequiredFieldValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
