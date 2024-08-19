// this was a great help https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Use file:// protocol for local files
    const filePath = path.resolve(__dirname, 'resume.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({ format: 'Letter' });

    await browser.close();
    
    // Write the PDF to disk
    fs.writeFile('resume.pdf', pdf, () => {
        console.log('PDF successfully written to disk!');
    });
}

printPDF();
