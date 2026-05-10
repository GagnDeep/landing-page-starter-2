import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Test About Page
        page = await browser.new_page()
        await page.goto('http://localhost:3000/about')
        await page.wait_for_timeout(2000)  # Wait for animations
        await page.screenshot(path='/home/jules/verification/about-verification.png', full_page=True)

        # Test Features Page
        page = await browser.new_page()
        await page.goto('http://localhost:3000/features')
        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/jules/verification/features-verification.png', full_page=True)

        # Test Pricing Page
        page = await browser.new_page()
        await page.goto('http://localhost:3000/pricing')
        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/jules/verification/pricing-verification.png', full_page=True)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
