## Coursework Template

### CM2040 Database Networks and the Web

#### (SUBMISSION) How to navigate the AML Micro-Blogging app once its up and running

- Key URLs for Author & Reader Home pages
  Author Home Page URL = http://localhost:3000/author/home
  Reader Home Page URL = http://localhost:3000/reader/home

- Instructions to test all functionalities (Step 1 - 20):

  1. Open Author Home page by opening URL = http://localhost:3000/author/home

  2. Open Author Setting page by clicking Setting link on the top right

  3. Observe Micro-blog Title, Subtitle, Author are auto-populated

  4. Make changes by changing Author from `Bobby` to `Alex`, Click on `Update`

  5. Observe Author name is updated and subsequently redirected to Author Home page.

  6. Click on `CREATE NEW DRAFT` to create draft article. Observe redirection to Author Edit page.

  7. Populate Title, Subtitle, Body field and Click on `CREATE` to submit. Observe that not populating all fields shows warnings.

  8. Once submitted, observe redirection to Author Home Page. Observe the new draft article shows up under `Draft Articles` section. Observe the created_at and modified_at time are the same in this case.

  9. For the new draft article, click on `EDIT` to be redirected to Author Edit page. Observe `Created_at`, `Modified_at`, `Status` information are populated in the Grey box on the top. Furthermore, observe `Title`, `Subtitle`, `Body` fields are auto-populated. Update `Title` value and click on `UPDATE` submit change.

  10. Observe redirection to Author Home page. `Title` field of the draft article is updated.

  11. For the new draft article, click on `PUBLISHED` to push it down to `Published Articles` section. Observe latest published articles appears at the top and is highlighted in dark blue.

  12. Repeat steps 6 - 8 to create a new draft article. Click on `DELETE` to observe the article is removed from `Draft Articles` section.

  13. For the newly published article, click on `SHARE` and observe a light-grey box containing links to its article page shows up. Observe the `SHARE` box is updated to `HIDE`. Click on `HIDE` to hide the link box and observe that it is hidden.

  14. Observe that clicking on the link redirects to the reader article page.

  15. Once redirected to reader article page, observe that article information are auto-populated - `Title`, `Subtitle`, `Body`, `Num_likes`, `Comments`

  16. Click on Yellow like box to upvote the article. Observe the value increases by one each time.

  17. Enter comment in the text box and click `ADD COMMENT`. Observe the comment shows up to the right and is in the order of older comment at the top.

  18. Scroll up and click on `Home` to navigate to Reader Home page. Observe that the published article shows up under `Published Articles` section.

  19. Navigate to Author Home page by opening http://localhost:3000/author/home. Click on `DELETE` to remove the published article. Observe the published article is deleted.

  20. Observe the published article in Reader Home page is also deleted.

  Done.

#### Installation requirements

- NodeJS
  - follow the install instructions at https://nodejs.org/en/
  - we recommend using the latest LTS version
- Sqlite3
  - Windows users: follow instructions here https://www.sqlitetutorial.net/download-install-sqlite/
  - Mac users: it comes preinstalled
  - Linux users: use a package manager eg. apt install

To install all the node packages run `npm install` from the project directory

#### Help with node SQLite3

A few aspects SQLite3 work a little differently to mySql but all of the key concepts are the same

Find the API documentation at:
https://github.com/TryGhost/node-sqlite3/wiki/API

Find node SQLite tutorials at:
https://www.sqlitetutorial.net/sqlite-nodejs/
This also a good resource to find examples and tutorials around SQLite queries

#### Using this template

This template sets you off in the right direction for your coursework. To get started:

Run `npm run build-db` to create the database (database.db)
Run `npm run start` to start serving the web app (Access via http://localhost:3000)

You can also run:
`npm run clean-db` to delete the database before rebuilding it for a fresh start

##### Next steps

- Explore the file structure and code
- Read all the comments
- Try accessing each of the routes via the browser - make sure you understand what they do
- Try creating ejs pages for each of the routes that retrieve and display the data
- Try enhancing the `create-user-record` page so that you can set the text in the record
- Try adding new routes and pages to let the user create their own records

##### Creating database tables

- All database tables should created by modifying the db_schema.sql
- This allows us to review and recreate your database simply by running `npm run build-db`
- Do NOT create or alter database tables through other means

#### Preparing for submission

Make a copy of this folder
In your copy, delete the following files and folders:
_ node_modules
_ .git (the hidden folder with your git repository) \* database.db (your database)

Make sure that your package.json file includes all of the dependencies for your project NB. you need to use the `--save` tag each time you use npm to install a dependency

#### Getting started with my project

Edit this section to include any settings that should be adjusted in configuration files and concise instructions for how to access the reader and author pages once the app is running.

NB. we will ONLY run `npm install`, `npm run build-db`, and `npm run start` . We will NOT install additional packages to run your code and will NOT run additional build scripts. Be careful with any additional node dependencies that you use.
