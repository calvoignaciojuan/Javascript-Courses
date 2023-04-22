const puppeteer = require("puppeteer");

//todo puppeteer funciona de forma asincrona y para poder usar await definimos una funcion autoejecutada

(async ()=>{
    console.log("lanzamos el navegador");
    const browser = await puppeteer.launch({headless : false});

    const page = await browser.newPage();
    await page.goto("https://facebook.com");

    var titulo2 = await page.evaluate(()=>{

        //esto se ejecuta en el explorador
        const h2 = document.querySelector("h2");
        console.log(h2.innerHTML);
        return(h2.innerHTML);
    });

    console.log(titulo2);
    await browser.close();
    console.log("navegador cerrado");

})();