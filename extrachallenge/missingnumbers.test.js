const missingnumber = require('./missingnumbers');

test('outputs missing numbers', () => {
    expect(missingnumber([1,2,3,5,6,7,9])).toEqual([4,8]);
});