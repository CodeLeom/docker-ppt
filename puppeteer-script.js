import puppeteer from "puppeteer"

const browser = await puppeteer.launch({
    //headless: "new", // Opting into the new headless mode instead of true
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

try {
    // Navigate to the page
    await page.goto('https://blog.apify.com', { waitUntil: 'load', timeout: 60000 }); // 60 seconds timeout

    // Take a screenshot
    await page.screenshot({ path: 'apify.jpeg', fullPage: true });

    console.log('Puppeteer script executed successfully.');
} catch (error) {
    console.error('Error running Puppeteer script:', error);
} finally {
    // Close the browser
    await browser.close();
}