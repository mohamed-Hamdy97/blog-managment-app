
const JWT = require("jsonwebtoken");
const { generateToken } = require("../../../../src/modules/auth/auth.service");

describe('generateToken', () => {

  it('should works fine and same like decoded value ', () => {

    process.env.JWT_SECRET = '5PQGUNdcftrHSXlNbOenm0Aygb6Ta18A'
    process.env.JWT_EXPIRES_IN = '1d'

    //act
    const hashedToken = generateToken({ id: '123' })

    console.log('has', hashedToken);


    const decodedValue = JWT.verify(hashedToken, '5PQGUNdcftrHSXlNbOenm0Aygb6Ta18A')

    //assert
    expect(decodedValue.id).toBe('123')
  })

  it('should sign fun ToBe called', () => {
    //mock
    const fackHashedValue = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    JWT.sign = jest.fn().mockReturnValue(fackHashedValue)

    //act
    generateToken({
      "sub": "1234567890",
      "name": "John Doe",
      "iat": 1516239022
    })

    //assert
    expect(JWT.sign).toHaveBeenCalled()
  })



})