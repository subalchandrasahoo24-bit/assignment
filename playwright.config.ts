import { defineConfig } from '@playwright/test';


export default defineConfig({
timeout: 30_000,
testDir: './tests',
use: {
baseURL: 'https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9',
headless: true,
actionTimeout: 10_000,
},
});
