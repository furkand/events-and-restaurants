const puppeteer = require("puppeteer");

const login = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 960 });
    await page.goto("https://desktime.com/login");
    await page.type("#email", process.argv[2]);
    await page.type("#password", process.argv[3]);
    await Promise.all([
      page.click(".emailLoginForm .btn-primary"),
      page.waitForNavigation({ waitUntil: "networkidle0" })
    ]);

    return page;
  } catch (err) {
    throw new Error(err);
  }
};

const addTeamMember = async () => {
  const page = await login();
  await page.goto("https://desktime.com/app/employees");
  await page.click(
    "body > div.page-container.row-fluid > div.page-content > div > h2 > div > .add-employee"
  );
  await page.waitForSelector(
    "body > div.modal.fade.in > div > div > div > div > form > div.row.importedUser > div:nth-child(2) > div > div:nth-child(1) > div > .form-control"
  );
  await page.type(
    "body > div.modal.fade.in > div > div > div > div > form > div.row.importedUser > div:nth-child(2) > div > div:nth-child(1) > div > .form-control",
    process.argv[4]
  );
  await page.waitForSelector(
    "body > div.modal.fade.in > div > div > div > div > form > div.row.importedUser > div:nth-child(2) > div > div:nth-child(2) > div > .form-control"
  );
  await page.type(
    "body > div.modal.fade.in > div > div > div > div > form > div.row.importedUser > div:nth-child(2) > div > div:nth-child(2) > div > .form-control",
    process.argv[5]
  );
  await page.waitForSelector(
    "div > .row > .col-xs-12:nth-child(3) > .rectangle > .form-control"
  );
  const selectElement = await page.$(
    "div > .row > .col-xs-12:nth-child(3) > .rectangle > .form-control"
  );
  await selectElement.type(process.argv[6]);
  await page.click(
    "body > div.modal.fade.in > div > div > div > div > form > div.row.m-t-30 > div.col-xs-8.text-right > div > button.btn.btn-primary.button.send"
  );
  await page.on("response", async response => {
    try {
      const res = await response.json();
      if (res.id) {
        console.log(res);
        return res
      }
    } catch (err) {
      throw new Error(err);
    }
  });
};

addTeamMember();
