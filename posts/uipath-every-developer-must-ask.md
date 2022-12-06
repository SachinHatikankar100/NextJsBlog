---
title: "Questions every RPA developer must ask before automating a business process"
date: "2022-12-06"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

- Let's look at the questions that a developer must ask or know before automating the process. Knowing the answers to the questions listed below helps in better understanding the current business circumstances and constraints. It also helps to design the bot if the impediments are something which cannot be mitigated and bot has to work under the known restrictions

- Do multiple teams working on process or parts of the process is handled by one team and another part handled by another?
- What are the roles of the users accessing the system?
- Exceptions reports should sent to team,individual or a DL?
- Could there be a scenario where we may have to restart the process if any of the steps within the end to end process fails?
- What are the steps to follow if there is a failure in the system during the process execution?
- Are there any financial penalties associated, if there is a delay in executing the process and SLAs are not met?
- Is the input data standard or unformatted input data is expected which requires cleaning before giving it as input?
- Any specific formats for the reports/output/email notifications?
- Would the bot be expected to run any queries on the db? If yes, what is the source of the queries?
- Are we connecting to any remote desktop/Citrix(which may require surface automation) or requires VPN/Token?
- What is the ETA for the process being automated?
- Do you face any delays in the page loading?
- What is the proposed time for the automation to get triggered?
- Any limitation after which the bot should not run due to application downtime or any system constraints?
- What are the pre-requisite for the bot to start(Eg. Input file, Dependent task, completion of other automation or manual process?)
- Is there any manual decision making required in between the processing? (Approvals, analysis etc)
- Where the applications hosted in the companies domain or client's domain?
- Are there any session timeout thresholds for the business applications?
- What are the scenarios which needs to be tested as a part of validations?
- Are there any known issues or possible exceptions which needs to be considered?
- Test data availability?
- What are the mechanism to create test data incase if we test in production?
- Do we have any recovery mechanism if something goes wrong while testing in production?
- Are there any alternate steps or other ways to execute the same process?
- What is the frequency of the inputs provided to process? (Daily, monthly, weekly, intermittently, occasionally)
- Exceptions should be sent right away or should be collected and be sent at the end of the bot run?
- Are there any shortcuts/ or other automation being used by the process?(Eg. running a macro, automated batch file etc)
- If using web application what are the browser types and browser versions supported?
- Can any application being used by the process today can be replaced with a similar other application? (Eg. From BMC to Service now)
