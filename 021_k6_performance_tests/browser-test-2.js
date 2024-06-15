import { check } from 'k6'
import { browser } from 'k6/experimental/browser'

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
}

export default async function () {
  const page = browser.newPage()

  try {
    await page.goto('https://test.k6.io/my_messages.php')

    // screenshot of empty form
    page.screenshot({ path: 'screenshots/screenshot-1.png' })

    // fill the form
    page.locator('input[name="login"]').type('admin')
    page.locator('input[name="password"]').type('123')

    // screenshot of filled form
    page.screenshot({ path: 'screenshots/screenshot-2.png' })

    // get submit button
    const submitButton = page.locator('input[type="submit"]')

    // click the submit button and wait for navigation
    await Promise.all([page.waitForNavigation(), submitButton.click()])

    // screenshot of logged in page
    page.screenshot({ path: 'screenshots/screenshot-3.png' })

    // check if the headline is correct in order to verify the login was successful
    check(page, {
      header: (p) => p.locator('h2').textContent() == 'Welcome, admin!',
    })
  } finally {
    page.close()
  }
}
