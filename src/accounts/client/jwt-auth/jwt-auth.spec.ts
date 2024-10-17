import { addJwtValidator, updateJwtValidator, getJwtValidators, removeJwtValidator } from './'

let validatorId: string

test('Adds jwt Validator', async () => {
  const result = await addJwtValidator({
    validationFields: ['id1', 'id2', 'id3'],
    userinfoRequestConfig: {
      method: 'POST',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDhJaZtjSw6EVvhr2Vr3dZ8QJJq-P27UkE',
      contentType: 'application/json',
      tokenParamName: 'idToken',
      tokenParamKind: 'body',
      tokenParamMask: '#####',
    },
    profile_fields_mapping: {
      email: 'users.0.email',
      name: ['users.0.localId', 'users.0.validSince'],
    },
    jwksUrl: 'https://test.com',
  })
  validatorId = result.id
  expect(result.id).toBeDefined()
})

test('Updates jwt Validator', async () => {
  const result = await updateJwtValidator(validatorId, {
    validationFields: ['sub', 'aud', 'iss'],
  })
  expect(result).toBeTruthy()
  expect(result.validationFields).toEqual(['sub', 'aud', 'iss'])
})

test('Gets validators', async () => {
  const result = await getJwtValidators()
  expect(result).toBeTruthy()
  expect(result.length).toBeGreaterThan(0)
  const validator = result.find((v) => v.id === validatorId)
  expect(validator).toBeTruthy()
})

test('Deletes jwt Validator', async () => {
  const result = await removeJwtValidator(validatorId)
  expect(result).toBe(true)
})
