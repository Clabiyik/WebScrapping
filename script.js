const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // Puppeteer ile tarayıcıyı başlat
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Sayfayı aç ve yüklenmesini bekle
  await page.goto('https://steamcommunity.com/market/search?q=ak-47+kartel');

  // Sayfadaki ürünleri seç ve verileri topla
  const items = await page.$$('.market_listing_row');
  const itemList = [];
  for (let item of items) {
    const name = await item.$eval('.market_listing_item_name', el => el.innerText.trim());
    const image = await item.$eval('.market_listing_item_img', el => el.src);
    const price = await item.$eval('.market_listing_price', el => el.innerText.trim());

    itemList.push({
      name,
      image,
      price
    });
  }

  // Verileri dosyaya kaydet
  fs.writeFile('steam-market-items.json', JSON.stringify(itemList), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Veriler başarıyla kaydedildi!');
    }
  });

  // Tarayıcıyı kapat
  await browser.close();
})();