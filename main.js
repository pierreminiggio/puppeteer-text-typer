import sleep from '@pierreminiggio/timeout'

/**
 * @param {import("puppeteer").Page} page 
 * @param {string} text 
 * @param {number} timeBetweenChars 
 * 
 * @returns {void}
 */
export default async function type(page, text, timeBetweenChars = 0) {
    await asyncForEach(Array.from(text), async (char) => {
        await sleep(timeBetweenChars)
        await page.type(legendInputSelector, char)
    })
}
