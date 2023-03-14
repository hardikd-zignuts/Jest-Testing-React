import sum from "../components/sum";

test('When a & b is number', () => {
    const result = sum('3', 2)

    expect(result).toEqual(5)
})


test('null test case', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});