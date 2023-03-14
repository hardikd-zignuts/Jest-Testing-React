import fetchUsers from "../components/fetchUsers"
let id1 = 'blank'
beforeEach(() => {
    console.log(id1)
})

test('weather user array exist or not', async () => {
    const data = await fetchUsers()
    id1 = data[0].id
    const len = data.length
    console.log(id1)
    expect(id1).toEqual(1)
    expect(len).toBeGreaterThan(0)
})