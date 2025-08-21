const SecondMaxValue = require("../../../Trees/TreeImplementation/SecondMaxValue/SecoundMaxValue")

test('1.when have many root in tree', () => {
    const SMX = new SecondMaxValue(12);
    SMX.add(20)
    SMX.add(15)
    SMX.add(9)
    SMX.add(8)
    SMX.add(25)
    SMX.add(30)
    SMX.add(28)
    SMX.add(29)
    expect(SMX.SecondMaxValue()).toBe(29);

});
test('1.when have many root in tree', () => {
    const SMX = new SecondMaxValue(12);
   
    expect(SMX.SecondMaxValue()).toBe(null);

});
