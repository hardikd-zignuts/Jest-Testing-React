import fetchData from "../components/fetchData";

test('to solve async test case', async () => {
    const data = await fetchData()

    expect(data).toBe('done')
})