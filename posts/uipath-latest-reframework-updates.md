---
title: "UiPath new Reframework changes"
date: "2021-11-27"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

* Added Orchestrator Queue folder name in config and also an input argument in Main

* Process.xaml moved to the framework folder

* SetTransactionStatus.xaml
- was added after process.xaml in the same try block
- was also added for each type of exception (System or Business)
*** That means it is no longer in the finally block***

* Added maximum consecutive retry number for persistent system exceptions. If that retry number was reached then the job is marked as failed

* Failed queue items updates with the location of associated exception screenshot

* In the init state the screen resolution can be logged

* If the declared asset in config (Assets sheet) is missing in orchestrator then the process stops in the init phase itself, which was not happened in the previous versions

* Also added some test cases related to the workflows that uses new features of Test Suite

Post reference: "Automate with UiPath - Youtube channel"