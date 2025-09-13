import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed
    const title = await page.title();
    expect(title).toBe('Expected Title'); // Replace with the expected title of your app

    // Example of interacting with a component
    await page.click('text=Example Component'); // Adjust the selector as needed
    const content = await page.locator('data-testid=example-content').textContent();
    expect(content).toBe('Expected Content'); // Replace with the expected content
});