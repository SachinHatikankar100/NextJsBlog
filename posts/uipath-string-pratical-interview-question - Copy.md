---
title: "UiPath Community 2023.4 Stable Release"
date: "2023-04-09"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

**_UiPath Community 2023.4 Stable Release_**

Wondering what are the features one must know about the stable release. Have a look at them below. Below features are not comprehensive but do point out the highlights of the release.

1. Search Activity:

- We will be able to search the activities even if the package is not installed with version 2023.4 updates

- Pre-requisites
  - Studio should be connected to the Automation Cloud
  - This feature is only available for cross platform projects
  - Note: Select the "Cross-platform" option when creating a new project in the Compatibility field

2. Show Properties Panel

- It is now available for all the majorly used activities

3. Data Manager Sorting Support

- Data manager is a single place to manage all your resources namely Variable, Arguments, Connection etc

- To restore the sorting to an alphabetic order you can simply click on the sort button in the Data Manager (the alphabetuc order applies to all resources in the Data Manager.)

4. Individual Refresh

- Using the refresh button in the Data manager now allows each category to be refreshed individually instead of blocking the interface.

- The categories that are loading will have a spinner and flagging that and the resources will be disabled until they are read.

- This should make the refresh faster and the interface should become more usable.

5. Save job execution recording

- When job throws exception during the bot run. Bot will take screenshot or record the job execution

- Enable the recording is done in orchestrator

- Click on the process
- Click on the Edit
- Go to the Additional setting tab
- Locate and Enable the job recording option
- It has 2 options

  - We can have the screenshot
  - We can have the Video option

- When we click on the i button we get the all previously available data along with screenshot. It can also be a video. For video, we have further 2 option we can record and store only failed jobs or we can record all jobs

6. Favorites Section - Assistant

- Group the processes which are your favorites.
- To add the process to the favorites we have to right click on the process and select the "Add to favorites" option. This will add the process under the Favorites section of the UiPath assistant
- To remove the process we can right click on the process in the favorites section and select "Remove from group"

7. Live Stream support over Remote Debugging

- Incase any unattended bot is facing any exception like unexpected pop up then we can actually control the execution without actually logging in the unattended machine.

- Just go to the process in orchestrator. Click on i button and click on "Open live Stream" option which will make a remote login in to the unattended machine and help us to take appropriate action

- This option is available for bots deployed in production for debugging.

- To enable this option we need to installed tiedvnz exe installed in the required machine.

**_Reference:_**

- Tutorials by Mukesh Kala
