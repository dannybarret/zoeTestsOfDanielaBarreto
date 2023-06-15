const { test, expect } = require('@playwright/test');

test('happy path of reschedule @reschedule', async ({ page }) => {

    // Navigate to the website
    await page.goto('https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5');
    // Validate the title is expected to contain Reschedule
    await expect(page).toHaveTitle("Reschedule");
    // Wait for class elements to load on the page
    await page.waitForSelector('.styles-module_datesContainer__days_day__i-EMs');
    // Waiting time for display day enabled
    await page.waitForTimeout(2000);
    // Get all elements with class "styles-module_datesContainer__days_day__i-EMs" to determine which days are active in the calendar
    const elements = await page.$$('div[class="styles-module_datesContainer__days_day__i-EMs"]'); 
    // Select first item that has day enabled
    const firstElement = elements[0];
    // Clic in first item that has day enabled
    await firstElement.click();
    // Waiting time to display hour
    await page.waitForTimeout(2000);
    // Select hour
    await page.click('[data-testid="1-availability"]');
    // Waiting time to display button reschedule
    await page.waitForTimeout(2000);
    // Select Phone Call
    await page.click('.ZUICardLabel--10h9kgq');
    // Waiting time to display select Phone Call
    await page.waitForTimeout(2000);
    // Click button Reschedule
    await page.click('.schedule-dashboard__calendar-main-cta');
    // Waiting time to display modal with the information
    await page.waitForTimeout(2000);
    // Click button Confirm
    await page.click('.ButtonContainer--1024f4p.fpjyUm.ZUIButton.ZUIButton--primary.ZUIButton--medium.styles_confirmationSchedule__cta_confirm__93j1C');
    // Waiting time to display modal with successfully Rescheduled
    await page.waitForTimeout(5000);
    // Locator text Successfully Rescheduled
    const text = await page.locator('text=Successfully Rescheduled!');
    // Validate modal Successfully Rescheduled
    await expect(text).toHaveText('Successfully rescheduled!');
    // Close navigator
    await page.close();
});