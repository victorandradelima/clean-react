import { RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-buider'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmaildValidation', () => {
    const validations = sut.field('any_field').email().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })
})
