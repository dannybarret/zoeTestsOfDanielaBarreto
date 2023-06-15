const { test, expect } = require('@playwright/test');

test('Cancel Meeting in reschedule @cancelMeeting', async ({ page }) => {

    // Navigate to the website
    await page.goto('https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5');
    // Validate the title is expected to contain Reschedule
    await expect(page).toHaveTitle("Reschedule");
    // Waiting time for the calendar to load
    await page.waitForTimeout(2000);
    // Click button cancel
    await page.click('xpath=/html/body/div/div[2]/div[3]/div[1]/div[2]/div[2]/button');
    // Waiting time to display modal for cancel meeting
    await page.waitForTimeout(2000);
    // Select Why do you want to cancel the meeting?
    await page.click('xpath=/html/body/div[2]/div[2]/div[3]/div[3]/div/div/div/div/div/div/div[1]/div/div/div/div/button');
    // Waiting time to display options
    await page.waitForTimeout(2000);
    // Clic in firts option I already found an Advisor
    await page.click('div.ZUIDropdown__options_single-option_text:has-text("I already found an Advisor")');
    // Waiting time to display other select Where did you find the other advisor?
    await page.waitForTimeout(2000);
    // Select Where did you find the other advisor?
    await page.click('xpath=/html/body/div[2]/div[2]/div[3]/div[3]/div/div/div/div/div/div/div[1]/div/div[2]/div/div/button');
    // Waiting time to display options
    await page.waitForTimeout(2000);
    // Clic in firts option Zoe Advisor
    await page.click('div.ZUIDropdown__options_single-option_text:has-text("Zoe Advisor")');
    // Waiting time to display select option
    await page.waitForTimeout(2000);
    // Clic button Cancel Meeting
    await page.click('button.ButtonContainer--1024f4p.fpjyUm.ZUIButton.ZUIButton--primary.ZUIButton--medium:has-text("Cancel Meeting")');
    // Waiting time to display modal "has been cancelled"
    await page.waitForTimeout(3000);
    // Locator text has been cancelled
    const text = await page.locator('text=has been cancelled');
    // Validate modal has been cancelled
    await expect(text).toHaveText('Meeting with Marcus has been cancelled.');
    // Close navigator
    await page.close();
});