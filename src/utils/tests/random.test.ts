import random from "../random"

describe('utils/random', () => {
  it('should return with number', () => {
    const num = random(0, 12)

    expect(typeof num).toBe('number')
  })

  test.each`
    min    | max    | expected
    ${0}   | ${3}   | ${3}
    ${1}   | ${3}   | ${3}
    ${2}   | ${10}  | ${10}
  `('should not exceed the expected `$expected` value when passing min: $min and max: $max', ({min, max, expected}: {min: number, max: number, expected: number}) => {
    const num = random(min, max)
    
    expect(num).toBeLessThanOrEqual(expected)
  })
})