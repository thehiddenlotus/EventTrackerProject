## Event Tracker
### Week 12 Skill Distillery Homework Project

### Overview
This is a gratitude list web application that functions like a daily journal that encourages users to record their mood and something they are grateful for each day. The user will then later be reminded of past gratitudes that they had recorded earlier. They will also be able to see data about if their mood has improved by using the application as well as manipulate their journal entries.

### Technologies Used
Java
mySQL
Spring Boot
Gradle
JPA
Postman

### Table of REST Endpoints
| CRUD Op. | HTTP Verb | URI                  |
|----------|-----------|----------------------|
| Read     | GET       | `/api/entries`       |
| Read     | GET       | `/api/entries/1`     |
| Create   | POST      | `/api/entries`       |
| Update   | POST      | `/api/entries`       |
| Delete   | DELETE    | `/api/entries/1`     |
| Search   | GET       | `/api/entries/search/date/2020-10-10`|
| Search   | GET       | `/api/entries/search/keyword/good`|
| Search   | GET       | `/api/entries/search/mood/10`|

### Application Instructions
Currently there is only a database and backend logic that can be tested with postman.

### Lessons Learned
Working on the back end of this project really showed me that I am more comfortable than I had thought with the process of connecting to a database through java and manipulating that data with Java entities.
