import asyncForEach from '@pierreminiggio/async-foreach'
import sleep from '@pierreminiggio/timeout'

/**
 * @param {import("puppeteer").Page} page
 * @param {string} selector
 * @param {string} text
 * @param {number} timeBetweenChars
 * 
 * @returns {Promise<void>}
 */
export default async function type(page, selector, text, timeBetweenChars = 0) {
    await asyncForEach(Array.from(text), async (char) => {
        await sleep(timeBetweenChars)
        await page.type(selector, char)
    })
}
