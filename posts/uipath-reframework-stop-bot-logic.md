---
title: "UiPath Reframework stop bot logic"
date: "2022-03-20"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

In this blog, let's look at how can we stop the reframework bot.

To achieve, we need to go inside the state "Get Transaction Data" which is the 2nd state in the reframework.

We need to set the variable "ShouldStop" to true. This can be done using if condition

The if condition can have 2 values
    1. First value should have a current time from the "Now" method
    2. Second value should have the config value which mentions the time at what time bot should stop.

