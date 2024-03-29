---
title: "UiPath String Practical Interview Question"
date: "2022-12-18"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

- Compare the 2 arguments str1 and str2 ignoring the order of the companies. If all the companies in the str1 exist in str2 and all the companies in str2 exists in str1, return "Matched" otherwise return the new companies in str2 and the removed companies in str1. The comparison is not case sensitive

- **_Input String test case 1_**

-str1
"Wealth"
"Financials Services"

-str2
"Wealth"
"Taxation"
"Money"

- **_Input String test case 2_**

-str1
"Wealth"
"Taxation"

-str2
"Taxation"
"Wealth"

- **_Required Output 1_**

New: Taxation,Money
Removed: Financials Services

- **_Required Output 2_**

Matched

- **_Solution:_**

Use **_Enviornment.Newline_** to get the data in an array format.
Then use the "Except" method to get the output.

- What does **_except_** method does ?
  The set difference of two sets is defined as the members of the first set that don't appear in the second set.
  This method returns those elements in first that don't appear in second. It doesn't return those elements in second that don't appear in first. Only unique elements are returned.

[Refer the working solution here ](https://github.com/SachinHatikankar100/UiPathPractice)

**_Except defintion reference:_**

- https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.except?view=net-7.0
