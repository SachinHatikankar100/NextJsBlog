---
title: "UiPath Timezone class implementation"
date: "2022-12-03"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

- In this blog, lets discuss about a scenario where you are suppose to check the date and time in the bot machine where the bot is running.

- You need to get the date and time because you want to stop the bot once it has reached a particular time and get the output summary file report generated. (Eg.; 9:30 PM IST)

- Seemingly , straightforward scenario if the machine were bot is running is in the same timezone where the business team is working.

- If the bot is in the same timezone then **DateTime.Now** is what everyone will be using to get the current date time and let bot perform the subsequent actions required.

- However, when the bot machine is not in the same timezone then business might face issue because summary report will not be sent by the bot at 9:30 PM IST because the machine where the bot is running is in UTC timezone and the time in that machine is different.

- In this case, bot will send the output summary file only when 9:30 PM UTC time has been reached.

- Also, keeping in mind the constraint is UiPath orchestrator infrastructure set up is in UTC timezone which RPA CoE team prefers and updating timezone and date time is not an option.

- To overcome such a problem, we can use timezone class available in .Net

- Refer the code implementation of the timezone class and its usage in UiPath which provides the answer to the above scenario. [Refer the xaml files here ](https://github.com/SachinHatikankar100/UiPathPractice)

Post reference:

- https://learn.microsoft.com/en-us/dotnet/api/system.timezone?view=net-7.0
