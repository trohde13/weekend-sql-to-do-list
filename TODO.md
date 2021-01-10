## STARTING OFF
- [x] Sketch out rough ideas offline
- [x] Create Server Folder
    - [x] server.js
    - [x] modules folder/ pool.js
    - [x] .gitignore
    - [x] Public Folder
        - [x] index.html
        - [x] scripts folder/ client.js
        - [x] styles folder/ style.css
        - [x] vendors folder
        - [x] add jQuery
        - [ ] add bootstrap
        - [x] routes folder/ router.js file
        - [x] npm install / npm install express / npm install pg

## DATABASE
    - [x] Create SQL database weekend-to-do-app
    - [x] Create To Do List Table (Named: ______ )
    - [x] Determine Rows/ Headers for Table
        - id (serial primary key), completed (y/n), priority (high/low), note (varchar 140), delete

## CLIENT (index.html/ client.js)
- [x] Create base page layout
    - [x] header
    - [x] form
        - [x] input for note
        - [x] dropdown for priority level?
        - [x] add note/ submit button
    - [x] table to append to (rows for priority level, note, delete button, completed button/check box)
    - [x] footer?
    - [ ]
    - [ ]
    - [ ]
    - [ ]
    - [ ]
- [x] Create GET ROUTE/ ajax for table data (append to do list notes to DOM)
- [x] Create POST ROUTE/ ajax for input data (inputs to add notes to do list array)
- [x] Create DELETE ROUTE/ ajax for deleting list data from DOM/ database
- [x] Create PUT ROUTE/ ajax for changing row data when task is completed

## STYLING (style.css)
- [x] theme of page (paper/ notebook or do I want to explore something different)
- [x] background color/ image 
- [x] header color/ image
- [x] font style for header/ logo
- [x] font style for notes
- [x] footer for "brand consistency" of page
- [ ] table formating (bootstrap)
    -[ ] consider how I want this to appear on page
- [x] text-strikethrough/ colorchange on completed click

## SERVER (server.js/ router.js/ pool.js)
- [x] Create GET ROUTE/ ajax for table data (append to do list notes to DOM)
- [x] Create POST ROUTE/ ajax for input data (inputs to add notes to do list array)
- [x] Create DELETE ROUTE/ ajax for deleting list data from DOM/ database
- [x] Create PUT ROUTE/ ajax for inserting data to SQL database
