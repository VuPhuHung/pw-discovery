/* # Javascript
## Đề bài:
Chuỗi (string) là một tập hợp các ký tự nối liền nhau. Trong bài tập này, bạn sẽ viết một hàm để đảo ngược chuỗi, tức là sắp xếp các ký tự của chuỗi theo thứ tự ngược lại.

### Yêu cầu:
Viết một hàm JavaScript có tên reverseString để đảo ngược một chuỗi đầu vào.
Sau khi đảo ngược chuỗi, in ra kết quả.

## Ví dụ:
### Input:
Chuỗi: "hello"

### Output:
Chuỗi đảo ngược: "olleh"
Giải thích: Chuỗi "hello" khi đảo ngược sẽ trở thành "olleh", các ký tự từ cuối chuỗi sẽ chuyển lên đầu.

## Gợi ý:
Để giải quyết bài toán này, bạn có thể:
- Tách chuỗi thành một mảng các ký tự bằng cách sử dụng phương thức split('').
- Sử dụng phương thức reverse() để đảo ngược mảng ký tự.
- Nối các ký tự lại thành chuỗi bằng cách sử dụng phương thức join('').

# Playwright
Viết code automation cho test case sau (có thể sử copy code từ bài trước để code nhanh hơn)
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 1: Register Page (có đủ các element)
- Điền vào đầy đủ các thông tin của user
- Kiểm tra kết quả đúng như thông tin đã điền. */

// Javascript:
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Đây là một câu để đảo ngược"));

// Playwright:
import { test, expect } from '@playwright/test';

test('Register Page Test', async ({ page }) => {
    await test.step("Go to page", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    test.step("Click Bài học 1: Register Page", async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

    await test.step("Fill in user information", async () => {
        await page.locator('//input[@id="username"]').fill("david");
        await page.locator('//input[@id="email"]').fill("David@example.com");
        await page.locator('//input[@id="male"]').check();
        await page.locator('//input[@id="reading"]').check();
        await page.locator('//input[@id="cooking"]').check();
        await page.locator('//select[@id="interests"]').selectOption("Art");
        await page.locator('//select[@id="country"]').selectOption("United States");
        await page.locator('//input[@id="dob"]').fill("2000-01-01");
        await page.locator('//input[@id="profile"]').setInputFiles(`D:\\pw-course\\QA fullstack\\Daily\\pw-discovery\\daily-challenges\\2024-09\\16\\test-data\\sports-car-mountains-retrowave-synthwave-2k-wallpaper-uhdpaper.com-233@0@k.jpg`);
        await page.locator('//textarea[@id="bio"]').fill("Hello everybody");
        await page.locator('//input[@id="rating"]').fill("10");
        await page.locator('//input[@id="favcolor"]').fill("#ff0000");
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id="newsletter"]').check();
        await page.locator('//span[@class="slider round"]').check();
        await page.locator('//button[@type="submit"]').click();
    });
    await test.step("Check result", async () => {
        // Check that there is exactly one row in the user table
        await expect(page.locator('//table[@id="userTable"]/tbody/tr')).toHaveCount(1);
    
        // Check that the row contains the expected text
        await expect(page.getByRole('row', { name: 'david' })).toBeVisible();
        await expect(page.getByRole('row', { name: 'David@example.com' })).toBeVisible();
        await expect(page.getByRole('row', { name: 'Male' })).toBeVisible();
        await expect(page.getByRole('row', { name: 'Reading' })).toBeVisible();
        await expect(page.getByRole('row', { name: 'Cooking' })).toBeVisible();
        await expect(page.getByRole('row', { name: 'usa' })).toBeVisible();
        await expect(page.getByRole('row', { name: '2000-01-01' })).toBeVisible();        
        await expect(page.getByRole('row', { name: 'Hello everybody' })).toBeVisible();
        await expect(page.getByRole('row', { name: '#ff0000' })).toBeVisible();
        await expect(page.getByRole('row', { name: 'yes' })).toBeVisible();

    });
});
