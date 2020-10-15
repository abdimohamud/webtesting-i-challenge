const enhancer = require('./enhancer.js');

it("adds to enhancement under 20", function () {
    const item = {
        name: "Bill",
        durability: 30,
        enhancement: 13
    }
    expect(enhancer.success(item)).toStrictEqual({
        name: "Bill",
        durability: 30,
        enhancement: 14
    })
})
it("increments durability based on enhancement", function () {
    const item = {
        name: "Bill",
        durability: 30,
        enhancement: 16
    }
    expect(enhancer.fail(item)).toStrictEqual({
        name: "Bill",
        durability: 20,
        enhancement: 15
    })
})
it("repairs the item", function () {
    const item = {
        name: "Bill",
        durability: 10,
        enhancement: 16
    }
    expect(enhancer.repair(item)).toStrictEqual({
        name: "Bill",
        durability: 100,
        enhancement: 16
    })
})