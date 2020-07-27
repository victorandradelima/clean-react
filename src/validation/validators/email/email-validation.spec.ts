import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors/invalid-field-validation'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
