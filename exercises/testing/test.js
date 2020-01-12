// write some tests
const { fixID } = require('./users');
describe('users', () => {
  test('should return numerical', () => {
    const id = "500";
      expect(fixID(id)).toBe(500); 
  })
})
