# Web Scrapping

Hi, today i will show you web scrapping. Web scraping, also known as "web data extraction" or "web harvesting", is a technique that involves collecting data from websites. This process involves using software tools to automatically extract information from web pages, such as text, images, and other structured data. The extracted data can then be analyzed or used for various purposes, such as research, data analysis, or building applications. Web scraping can be performed manually by copying and pasting data from web pages, but it is more commonly done using automated tools that can quickly and efficiently extract large amounts of data from multiple sources. However, it is important to note that web scraping must be done ethically and in compliance with applicable laws and website terms of service.

In the code I have written, steam lists all the items found in the store and brings them to me. This is a j of the data I have received.i'm saving it to the last file

<img src="https://editor.analyticsvidhya.com/uploads/263984.png">

Firstly you need to install puppeteer

npm install puppeteer


To scrape data between specific div tags, you need to inspect the HTML source code of the webpage and locate the div tags that contain the data you want to scrape. Div tags are commonly used to define sections of a webpage.

The text or other HTML tags that are located between the opening tag (<div>) and closing tag (</div>) of the div tag represent the data between specific div tags.

To extract this data, you can use an XPath expression or a CSS selector in your web scraping program to select all the text within a specific div tag.

<img src="https://miro.medium.com/v2/resize:fit:1400/1*VhgoMo7AO2yIbI_er7pkoA.png">

