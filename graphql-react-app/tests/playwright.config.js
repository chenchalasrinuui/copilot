module.exports = {
    testDir: './tests',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    reporter: 'list',
    use: {
        headless: true,
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
};