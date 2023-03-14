import fetchUsers from "../components/fetchUsers"


test(' weather user array exist or not', async () => {
    const data = await fetchUsers()
    const id1 = data[0].id
    const len = data.length

    expect(id1).toEqual(1)
    expect(len).toBeGreaterThan(0)
})