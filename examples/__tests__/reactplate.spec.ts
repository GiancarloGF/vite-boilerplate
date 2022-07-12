import { editFile, untilUpdated } from "../scripts/test-utils";
import { port } from "./serve";

jest.setTimeout(10000);

const url = `http://localhost:${port}`;

test("/", async () => {
  await page.goto(url);
  expect(await page.textContent("li")).toMatch("Home");
});

test("/about", async () => {
  await page.goto(url + "/about");

  expect(await (await page.$(".about-reactplate")).innerText()).toMatch(
    "Reactplate is Minimal Setup & Fast Boilerplate For"
  );
});

test("hmr", async () => {
  await page.click('a[href="/"]');
  editFile("src/api/Todo/List.jsx", (code) =>
    code.replace("Todo List :", "Yang Harus Dilakukan :")
  );

  await untilUpdated(() => page.textContent("h5"), "Yang Harus Dilakukan :");
  editFile("src/api/Todo/List.jsx", (code) =>
    code.replace("Yang Harus Dilakukan :", "Todo List :")
  );
});

test("client navigation", async () => {
  await untilUpdated(() => page.textContent('a[href="/about"]'), "About");
  await page.click('a[href="/about"]');

  await untilUpdated(
    () => page.textContent(".about-reactplate"),
    "Reactplate is Minimal Setup & Fast Boilerplate For"
  );
  editFile("src/pages/About.jsx", (code) =>
    code.replace(
      "Reactplate is Minimal Setup & Fast Boilerplate For",
      "Reactplate is Cool, Minimal Setup & Fast Boilerplate For"
    )
  );

  await untilUpdated(
    () => page.textContent(".about-reactplate"),
    "Reactplate is Cool, Minimal Setup & Fast Boilerplate For"
  );
  editFile("src/pages/About.jsx", (code) =>
    code.replace(
      "Reactplate is Cool, Minimal Setup & Fast Boilerplate For",
      "Reactplate is Minimal Setup & Fast Boilerplate For"
    )
  );
});
