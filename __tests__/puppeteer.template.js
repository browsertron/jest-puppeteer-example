describe('test {{num}}', () => {
  it('works', async () => {
    await page.goto('http://localhost:8000/examples/vanillajs/');
    expect(await page.title()).toBe('VanillaJS • TodoMVC');
  });
});
