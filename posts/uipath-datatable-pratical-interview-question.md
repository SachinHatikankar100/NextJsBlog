---
title: "UiPath Datatable Practical Interview Question"
date: "2022-12-08"
hero_image: "./annie-spratt-MChSQHxGZrQ-unsplash.jpg"
hero_image_alt: "men sitting in front of their laptop computer"
hero_image_credit_text: "Annie Spratt"
hero_image_credit_link: "https://unsplash.com/photos/MChSQHxGZrQ"
---

- Generate an output table to find employees who have the highest salary in each of the department
  Employees with the highest salary appearing first should be returned

- Employee Sheet
  ![alt text](/images/EmployeeSheet.jpg "Employee Input Format")

- Department Sheet
  ![alt text](/images/DepartmentSheet.jpg "Department Input Format")

- Required Output
  ![alt text](/images/RequiredDatatableOutput.jpg "Datatable Output Format")

- **_Solution:_**

One of the approach to solve this in UiPath is to add one column manually in the Employee Sheet "departmentname" which will save all the appropriate name according to the "departmentid"

Above will achieved by using "invoke code" activity with logic of mapping the "departmentid" to "departmentname"
This activity will have argument of datatable type with direction set to "in/out" incase of reusing the same datatable variable.

Then use "DefaultView" method to arrange the column in the required format and use the linq query to get the required output.

[Refer the working solution here ](https://github.com/SachinHatikankar100/UiPathPractice)
