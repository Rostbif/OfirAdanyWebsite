import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("has title", async ({ page }) => {
  await page.goto(UI_URL);

  // Expect a title "to contain" a substring.
  await expect(page.getByText("I'm Ofir Adany")).toBeVisible();
});

// test("get started link", async ({ page }) => {
//   await page.goto(UI_URL);
//   if (await page.getByText("button", { name: "Logout" })) {
//     await page.getByRole("button", { name: "Logout" }).click();
//   }

//   // Click the get started link.
//   await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

//   // // Expects page to have a heading with the name of Installation.
//   // await expect(
//   //   page.getByRole("heading", { name: "Installation" })
//   // ).toBeVisible();
// });
