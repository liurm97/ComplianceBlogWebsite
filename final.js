// I have written all the code myself - Style.css, author.js, reader.js , all .ejs files, script.js


// Style.css - Start
/* IMPORT GOOGLE FONT */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

/* GLOBAL SETTINGS */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-size: 62.5%; /* Default font-size = 10px*/
}

body {
  min-width: 120rem;
  box-sizing: border-box;
  background-color: var(--color-background);
  font-family: "Roboto", sans-serif;
}

/* REUSABLE COMPONENT */
:root {
  --color-action: rgb(239, 211, 56);
  --color-background: rgb(234, 234, 234);
}

.latest-published {
  font-size: 1.6rem;
  font-weight: 500;
  color: rgb(47, 65, 90);
}

/* ---------------- HEADER COMPONENT: Used in all .ejs files ---------------- */

/* HEADER CONTAINER */
header {
  position: relative;
  padding: 6rem 0 4.8rem 0;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
}

/* HEADER TITLE */
.header__title {
  /* position: relative; */
  font-size: 5.6rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

/* HEADER TITLE SOLID LINE */
.header__title::after {
  display: block;
  content: "";
  width: inherit;
  height: 0.1rem;
  margin-top: 1.2rem;
  background-color: #000;
}

/* HEADER SUBTITLE */
.header__subtitle {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
}

/* HEADER SUBTITLE SOLID LINE */
.header__subtitle::after {
  margin-top: 1.2rem;
  display: block;
  content: "";
  width: inherit;
  height: 0.1rem;
  background-color: #000;
}

/* HEADER AUTHOR */
.header__author {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
}

/* PAGE LOCATION */
.header__location {
  font-size: 2.4rem;
  font-weight: bold;
  position: absolute;
  top: 5%;
  left: 25%;
  transform: translateX(-50%);
}

/* ---------------- READER COMPONENT ---------------- */

/* PUBLISHED ARTICLE */
.reader__location,
.article__title {
  font-size: 2.4rem;
  font-weight: 500;
}

/* PUBLISHED ARTICLE DATE */
.article__date {
  display: inline-block;
  font-size: 1.6rem;
}

/* PUBLISHED ARTICLE SUBTITLE */
.article__subtitle {
  display: inline-block;
  font-size: 2rem;
}

/* HEADINGS */
.reader__article-headings {
  margin-top: 1.6rem;
  display: flex;
  gap: 5.6rem;
  min-width: 50%;
  max-width: 50%;
}

.reader__article-headings h3 {
  font-size: 1.8rem;
}

/* --- ARTICLES HOME --- */

/* LAYOUT */
.box,
.author-box {
  font-size: 2.4rem;
  padding: 0 0 4.8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* LAYOUT GRIDLINE */
.articles::before {
  display: block;
  content: "";
  height: 0.1rem;
  width: inherit;
  background-color: #000;
  margin-bottom: 1.2rem;
}

.articles::after {
  display: block;
  content: "";
  height: 0.1rem;
  width: inherit;
  background-color: #000;
  margin-top: 1.2rem;
}

/* LAYOUT */
.articles {
  position: relative;
  min-width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* LIKE BUTTON */
.article__likes input {
  border: none;
  transform: translateX(150%);
  cursor: pointer;
  padding: 1.2rem 1.6rem;
  background-color: var(--color-action);
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2.4rem;
  transition: all 0.3s;
  box-shadow: 0 1px 1px #000000ab;
}

/* LIKE BUTTON HOVER EFFECT*/
.article__likes input:hover {
  background-color: #ffdd1f;
}

/* ARTICLE EDIT/HOME HEADING */
.article__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* INDIVIDUAL ARTICLE STYLE */
.article-list {
  margin-top: 2.4rem;
  min-width: 50%;
  max-width: 50%;
}

.article-list input {
  font-size: 2rem;
  background-color: #d9d9d9;
  border: none;
  padding: 0.8rem;
  box-shadow: 0 1.5px 2px #000;
  cursor: pointer;
  transition: 0.3s all;
}

/* INDIVIDUAL ARTICLE HOVER EFFECT */
.article-list input:hover {
  background-color: var(--color-action);
}

/* INDIVIDUAL ARTICLE BODY */
.article__body_box {
  padding: 1.6rem;
  background-color: #fff;
}

.article__body {
  font-size: 2rem;
  word-wrap: break-word;
}

/* COMMENT BOX FORMAT */
.comments {
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  padding: 4.8rem 0;
  min-width: 50%;
  max-width: 50%;
}

/* COMMENT BOX LAYOUT */
.comment__box {
  grid-column: 1 / span 3;
  grid-row: 1/2;
  align-self: start;
  max-width: 50%;
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem 0 2rem 2.4rem;
  background-color: #d9d9d9;
}

.comment__text {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
}

.comment__input {
  font-size: 2rem;
  border: none;
  line-height: 1.15;
}

/* COMMENT BOX SUBMIT BUTTON*/
.comment__submit {
  cursor: pointer;
  background-color: var(--color-action);
  border: none;
  box-shadow: 0 1.5px 2px #000;
  margin-top: 1.2rem;
  font-size: 2.4rem;
  padding: 1.2rem 1.6rem;
  transition: 0.3s all;
}

.comment__submit:hover {
  background-color: #ffdd1f;
}

/* COMMENT TEXTBOX STYLE*/
.comment {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex-grow: 1;
  grid-column: 3 / span 1;
  grid-row: 1/2;
  overflow: hidden;
}

.comment-posted {
  background-color: #d9d9d9;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.8rem;
}

.comment-posted span {
  display: inline-block;
  font-size: 1.6rem;
}

/* ---------------- AUTHOR COMPONENT ---------------- */

/* ---- SETTING COMPONENT ----*/
.author__setting {
  position: absolute;
  top: 2.5%;
  right: 25%;
  transform: translateX(50%);
}

.author__setting a {
  color: #2f415a;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  font-size: 2.4rem;
  text-decoration: none;
}

.author__setting a:hover {
  text-decoration: underline;
}

/* SETTING TEXTBOX STYLE*/
.setting__edit-author {
  display: flex;
}

.setting__edit-author textarea {
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  outline: none;
  padding: 0.2rem 0.5rem;
  margin-left: 0.8rem;
}

/* ---- HOME COMPONENT ----*/

/* HEADING */
.author__article-headings {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.author__article-headings h3 {
  font-size: 1.8rem;
}

/* DRAFT/PUBLISHED ARTICLE LAYOUT */
.author__article-box {
  max-width: 100%;
}

.author__articles {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

/* DRAFT/PUBLISHED ARTICLE */
.author__article-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  box-shadow: 0 1px 1px #000000ab;
  background-color: #fff;
  padding: 0.5rem 0.6rem;
  border-radius: 5px;
}

.author__article-row span {
  display: inline-block;
  max-width: 17%;
  flex: 0 1 auto;
}

/* DRAFT/PUBLISHED ACTION OPTIONS */
.author__actions {
  display: flex;
  gap: 0.5rem;
}

.author-article {
  background-color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
}

.author__article-action {
  color: #000;
  font-size: 1.6rem;
  text-decoration: none;
  background-color: #fff;
  padding: 0.5rem 0.6rem;
  border: 1px solid #d9d9d9;
  transition: all 0.3s;
  cursor: pointer;
}

.author__article-action:hover {
  background-color: var(--color-action);
}

/* CREATE NEW DRAFT BUTTON */
.article__article-btn {
  padding: 1rem 1.2rem;
  font-size: 2rem;
  background-color: var(--color-action);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 3rem;
  text-transform: uppercase;
  box-shadow: 1px 1px 1px #000000ab;
  transition: all 0.3s;
}

.article__article-btn:hover {
  background-color: #ffdd1f;
  transform: translateX(5%);
}

/* SHARE BUTTON */
.article__share-box {
  display: none;
  position: absolute;
  background-color: #d9d9d9;
  top: 0;
  right: -20rem;
  padding: 2rem;
  box-shadow: 0 1px 1px #000000ab;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.article__share-box a,
.article__share-box span {
  font-size: 1.6rem;
  color: #000;
}

.latest {
  background-color: #2f415a;
  color: #fff;
}

/* ---- EDIT COMPONENT ----*/

/* AUTHOR ARTICLE STYLE */
.article__info {
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1.2rem;
  gap: 2.4rem;
  background-color: #d9d9d9;
  max-width: 50%;
  margin: 0 auto;
}

/* EDIT ARTICLE STYLE */
.article__edit {
  padding-top: 2.4rem;
  display: flex;
  flex-direction: column;
  min-width: 50%;
  gap: 1.6rem;
}

.article__info span {
  font-size: 2.4rem;
}

.article__edit-title,
.article__edit-subtitle {
  display: flex;
}

.article__edit-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* ARTICLE LABEL STYLE */
.article-label {
  font-size: 2.4rem;
  margin-right: 2.4rem;
  font-weight: 500;
}

/* ARTICLE TEXTAREA STYLE */
.article__edit-title textarea,
.article__edit-subtitle textarea,
.article__edit-body textarea {
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  outline: none;
  padding: 0.2rem 0.5rem;
}

.article__edit-title textarea {
  margin-left: 3.2rem;
}

/* ---------------- FOOTER COMPONENT ---------------- */
footer {
  display: flex;
  justify-content: center;
  padding: 0 0 2rem 0;
}

footer p {
  font-size: 2.4rem;
}
footer span {
  font-weight: bold;
  font-size: 2.6rem;
}

// Style.css - End

// Script.js - Start

// Author Home - Share Link Interaction

//1. Get all active buttons
const buttonIDs = document.querySelectorAll("#btn-share");

//2. For each button
buttonIDs.forEach((buttonID) => {
  //2.1 Add `click` event listener
  buttonID.addEventListener("click", () => {
    //2.2 Check content of button
    if (buttonID.innerHTML === "SHARE") {
      //2.3 Get share box
      const shareBtn = buttonID.nextElementSibling.nextElementSibling;

      //2.4 Add `flex` class to hidden share box
      shareBtn.classList.add("flex");

      //2.5 Update content to `HIDE`
      buttonID.innerHTML = "HIDE";
    } else if (buttonID.innerHTML === "HIDE") {
      const shareBtn = buttonID.nextElementSibling.nextElementSibling;

      //2.6 If content = `HIDE` then remove `flex` class
      shareBtn.classList.remove("flex");

      //2.7 Update content to `SHARE`
      buttonID.innerHTML = "SHARE";
    }
  });
});

// Script.js - End

// Routes - Author.js - Start

//FOR AUTHOR - HOME | AUTHOR - EDIT | AUTHOR - SETTINGS PAGES

// IMPORT LIBRARIES
const express = require("express");
const format = require("date-fns/format");

// SETUP EXPRESS ROUTER
const router = express.Router();

// DEFINE TITLEDESCRIPTION TO BE PASSED AS INPUTS DURING RENDERING
const titleDescription = {
  title: "AML Micro-Blogging App",
  description:
    "AML Micro-Blogging app for your daily dose of compliance update.",
};

//--- CONTROLLER FUNCTION

// GET DATA FROM `BLOG` TABLE ADD TO REQUEST -> PASS TO NEXT MIDDLEWARE
const getBlogInformation = (req, res, next) => {
  //PURPOSE: GET BLOG TITLE, SUBTITLE, AUTHOR
  //INPUT: NONE
  //OUTPUT: BLOG TITLE, SUBTITLE, AUTHOR
  global.db.get("SELECT * FROM blog", function (err, row) {
    if (err) {
      next(err); //SEND THE ERROR ON TO THE ERROR HANDLER
    } else {
      // ADD TO REQUEST -> PASS TO NEXT MIDDLEWARE
      req.title = row.title;
      req.subtitle = row.subtitle;
      req.author = row.author;
      next();
    }
  });
};

// GET DATA FROM `ARTICLES` TABLE -> RENDER `AUTHOR - HOME` PAGE
const renderAuthorHome = (req, res) => {
  // Get title, subtitle, author
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;

  //PURPOSE: GET ALL ARTICLES
  //INPUT: NONE
  //OUTPUT: ALL ARTICLES
  global.db.all("SELECT * FROM articles", function (err, rows) {
    if (err) {
      next(err); //SEND THE ERROR ON TO THE ERROR HANDLER
    } else {
      // DEFINE DRAFT AND PUBLISHED ARTICLES ARRAY
      const draftArticles = [];
      const publishedArticles = [];

      // POPULATE ARTICLES ARRAY
      for ([key, value] of Object.entries(rows)) {
        value.is_published == 1
          ? publishedArticles.push(value)
          : draftArticles.push(value);
      }

      // RENDER AUTHOR HOME PAGE
      res.render("authorHome.ejs", {
        titleDescription,
        location: "Author - Home",
        publishedArticles: publishedArticles,
        draftArticles: draftArticles,
        title: title,
        subtitle: subtitle,
        author: author,
      });
    }
  });
};

// CLICK `CREATE NEW DRAFT` BUTTON -> RENDER AUTHOR EDIT PAGE
const createDraftArticle = (req, res) => {
  // DEFINE TITLE, SUBTITLE, AUTHOR, REQUESTTYPE
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;
  const request = req.path.split("/");
  const requestType = request[request.length - 1];

  // RENDER AUTHOR EDIT PAGE
  res.render("authorEdit.ejs", {
    titleDescription,
    location: "Author - Edit",
    requestType: requestType,
    title: title,
    subtitle: subtitle,
    author: author,
  });
};

// CREATES A NEW DRAFT ARTICLE
const createDraftArticleAction = (req, res) => {
  // DEFINE TITLE, SUBTITLE, BODY, CREATED_AT OF THE DRAFT ARTICLE
  const new_title = req.body.article_title;
  const new_subtitle = req.body.article_subtitle;
  const new_body = req.body.article_body;
  const created_at = format(new Date(), "yyyy/LL/dd HH:mm:ss");

  //PURPOSE: INSERT NEW ARTICLE INTO ARTICLES TABLE
  //INPUT: NEW ARTICLE - TITLE, SUBTITLE, CREATED_AT, BODY, NUMBER OF LIKES, IS_PUBLISHED
  //OUTPUT: NONE
  global.db.run(
    `INSERT INTO articles\
  ('title', 'subtitle', 'created_at', 'modified_at', 'body','num_likes','is_published')\
  VALUES(?,?,?,?,?,?,?)`,
    [new_title, new_subtitle, created_at, created_at, new_body, 0, 0],
    function (err) {
      if (err) console.error(err);
      // Redirect to author - home page
      else {
        res.redirect(`/author/home`);
      }
    }
  );
};

// Click `CREATE NEW DRAFT` button -> Render author edit page
const updateDraftArticle = (req, res) => {
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;
  const request = req.path.split("/");
  const articleid = request[request.length - 2];
  const requestType = request[request.length - 1];

  //PURPOSE: GET A SPECIFIC ARTICLE THAT MATCHES `articleid`
  //INPUT: NONE
  //OUTPUT: ALL PROPERTIES OF A SPECIFIC ARTICLE
  global.db.get(
    `SELECT * FROM articles where id = ${articleid}`,
    function (err, row) {
      if (err) {
        next(err); //send the error on to the error handler
      } else {
        res.render("authorEdit.ejs", {
          titleDescription,
          location: "Author - Edit",
          created_at: row.created_at,
          modified_at: row.modified_at,
          articleid: articleid,
          requestType: requestType,
          article_title: row.title,
          article_subtitle: row.subtitle,
          article_body: row.body,
          title: title,
          subtitle: subtitle,
          author: author,
        });
      }
    }
  );
};

// UPDATE ARTICLE AND REDIRECT TO AUTHOR HOME PAGE
const updateDraftArticleAction = (req, res) => {
  // GET RELEVANT DATA TO UPDATE ARTICLES DATABASE
  const request = req.path.split("/");
  const articleid = request[request.length - 2];
  const new_modified_at = format(new Date(), "yyyy/LL/dd HH:mm:ss");
  const new_title = req.body.article_title;
  const new_subtitle = req.body.article_subtitle;
  const new_body = req.body.article_body;

  //PURPOSE: UPDATE A SPECIFIC ARTICLE IN `articles` TABLE by `articleid`
  //INPUT: NEW ARTICLE - TITLE, SUBTITLE, BODY, MODIFIED_AT, ID
  //OUTPUT: NONE
  global.db.run(
    "UPDATE articles SET title = ?,\
  subtitle = ?,\
  body = ?,\
  modified_at = ? where id = ?",
    [new_title, new_subtitle, new_body, new_modified_at, articleid],
    function (err) {
      if (err) console.error(err);
      else {
        // REDIRECT TO AUTHOR HOME PAGE
        res.redirect(`/author/home`);
      }
    }
  );
};

// PUBLISH DRAFT ARTICLE AND REDIRECT TO AUTHOR HOME PAGE
const publishDraftArticleAction = (req, res) => {
  // GET RELEVANT DATA
  const articleid = req.params.articleid;
  const published_date = format(new Date(), "yyyy/LL/dd HH:mm:ss");

  //PURPOSE: UPDATE A SPECIFIC ARTICLE IN `articles` TABLE by `articleid`
  //INPUT: IS_PUBLISHED = 1, PUBLISHED_DATE, ID
  //OUTPUT: NONE
  global.db.run(
    "UPDATE articles SET is_published = ?,\
    modified_at = ?\
     where id = ?",
    [1, published_date, articleid],
    function (err) {
      if (err) console.error(err);
      else {
        // REDIRECT TO AUTHOR - HOME PAGE
        res.redirect(`/author/home#published_article`);
      }
    }
  );
};

// DELETE DRAFT/PUBLISHED ARTICLE AND REDIRECT TO AUTHOR HOME PAGE
const deleteDraftArticleAction = (req, res) => {
  const articleid = req.params.articleid;

  //PURPOSE: DELETE SPECIFIC ARTICLE FROM ARTICLES TABLE BY `articleid`
  //INPUT: ID
  //OUTPUT: NONE
  global.db.run(
    "DELETE FROM articles where id = ?",
    [articleid],
    function (err) {
      if (err) console.error(err);
      else {
        // REDIRECT TO AUTHOR - HOME PAGE
        res.redirect(`/author/home#draft_article`);
      }
    }
  );
};

// RENDER AUTHOR - SETTING PAGE
const renderSetting = (req, res) => {
  // GET RELEVANT DATA FROM REQUEST
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;

  // RENDER `AUTHORSETTING.EJS` PAGE
  res.render("authorSetting.ejs", {
    titleDescription,
    location: "Author - Setting",
    title: title,
    subtitle: subtitle,
    author: author,
  });
};

// UPDATE BLOG TABLE (CONTAINS MICROBLOG TITLE, SUBTITLE, AUTHOR)
const updateBlogInformation = (req, res) => {
  // GET RELEVANT DATA FROM REQUEST
  const title = req.body.blog_title;
  const subtitle = req.body.blog_subtitle;
  const author = req.body.blog_author;

  //PURPOSE: UPDATE BLOG TABLE WITH NEW BLOG TITLE,SUBTITLE,AUTHOR INFORMATION
  //INPUT: NEW BLOG - TITLE, SUBTITLE, AUTHOR
  //OUTPUT: NONE
  global.db.run(
    "UPDATE blog SET title = ?,\
     subtitle = ?,\
     author = ?\
     ",
    [title, subtitle, author],
    function (err) {
      if (err) console.error(err);
      else {
        // REDIRECT TO AUTHOR - HOME PAGE
        res.redirect(`/author/home`);
      }
    }
  );
};

//------------- Routes -----------//

//1. AUTHOR - HOME ROUTE
router.route("/home").get(getBlogInformation, renderAuthorHome);

//2. ROUTE TO RENDER AND UPDATE DRAFT ARTICLE
router
  .route("/article/create")
  .get(getBlogInformation, createDraftArticle)
  .post(getBlogInformation, createDraftArticleAction);
router
  .route("/article/:articleid/edit")
  .get(getBlogInformation, updateDraftArticle)
  .post(getBlogInformation, updateDraftArticleAction);

//3. ROUTE TO PUBLISH DRAFT ARTICLE
router
  .route("/article/:articleid/publish")
  .post(getBlogInformation, publishDraftArticleAction);

//4. ROUTE TO DELETE DRAFT/PUBLISHED ARTICLE
router
  .route("/article/:articleid/delete")
  .post(getBlogInformation, deleteDraftArticleAction);

//5. ROUTE TO RENDER AND UPDATE SETTING PAGE
router
  .route("/setting")
  .get(getBlogInformation, renderSetting)
  .post(updateBlogInformation);

//EXPORT AUTHOR ROUTER
module.exports = router;

// Routes - Author.js - End

// Routes - Reader.js - Start

//FOR READER - HOME | READER - EDIT PAGES

// IMPORT LIBRARIES
const format = require("date-fns/format");
const express = require("express");

// SETUP EXPRESS ROUTER
const router = express.Router();

// DEFINE TITLEDESCRIPTION TO BE PASSED AS INPUTS DURING RENDERING
const titleDescription = {
  title: "AML Micro-Blogging App",
  description:
    "AML Micro-Blogging app for your daily dose of compliance update.",
};

//--- CONTROLLER FUNCTION

//REUSE FROM `AUTHOR.JS`:
// GET DATA FROM `BLOG` TABLE ADD TO REQUEST -> PASS TO NEXT MIDDLEWARE

const getAuthorInformation = (req, res, next) => {
  //PURPOSE: GET BLOG TITLE, SUBTITLE, AUTHOR
  //INPUT: NONE
  //OUTPUT: BLOG TITLE, SUBTITLE, AUTHOR
  global.db.get("SELECT * FROM blog", function (err, row) {
    if (err) {
      next(err); //SEND THE ERROR ON TO THE ERROR HANDLER
    } else {
      req.title = row.title;
      req.subtitle = row.subtitle;
      req.author = row.author;
      next();
    }
  });
};

// RENDER READER - HOME PAGE
const renderArticles = (req, res, next) => {
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;

  //PURPOSE: GET ALL RECORDS FROM ARTICLES TABLE
  //INPUT: NONE
  //OUTPUT: ALL ARTICLES
  global.db.all("SELECT * FROM articles", function (err, rows) {
    if (err) {
      next(err); //SEND THE ERROR ON TO THE ERROR HANDLER
    } else {
      //POPULATE THE TEMPLATE
      res.render("readerHome.ejs", {
        titleDescription,
        location: "Reader - Home",
        articleRows: rows,
        title: title,
        subtitle: subtitle,
        author: author,
      });
    }
    next();
  });
};

// GO READER - ARTICLE PAGE FROM READER - HOME
const goArticleFromHome = (req, res, next) => {
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;
  const articleid = req.path.split("/")[req.path.split("/").length - 1];

  //PURPOSE: JOIN `articles` & `article_comments` table. GET ALL PROPERTIES BY `articleid`
  //INPUT: ID
  //OUTPUT: ALL PROPERTIES OF A SPECIFIC article (by `articleid`)
  global.db.all(
    `SELECT * FROM articles FULL OUTER JOIN\
    article_comments ON articles.id = article_comments.article_id\
    WHERE articles.id = ${articleid}`,
    function (err, rows) {
      if (err) {
        next(err); //SEND THE ERROR ON TO THE ERROR HANDLER
      } else {
        const articleTitle = rows[0].title;
        const articleSubtitle = rows[0].subtitle;
        const articleCreatedAt = rows[0].created_at;
        const articleModifiedAt = rows[0].modified_at;
        const articleBody = rows[0].body;
        const articleNumLikes = rows[0].num_likes;
        const commentRows = rows;

        //POPULATE THE TEMPLATE
        res.render("readerArticle.ejs", {
          titleDescription,
          location: "Reader - Article",
          article_id: articleid,
          article_title: articleTitle,
          article_subtitle: articleSubtitle,
          article_created_at: articleCreatedAt,
          article_modified_at: articleModifiedAt,
          article_body: articleBody,
          article_numlikes: articleNumLikes,
          commentRows: commentRows,
          title: title,
          subtitle: subtitle,
          author: author,
        });
      }
      next();
    }
  );
};

// UPDATE NUMBER OF LIKES FOR AN ARTICLE EACH TIME IT IS UPVOTED
const updateArticleLikes = (req, res, next) => {
  const articleid = req.params.articleid;

  // GET EXISTING NUMBER OF LIKES
  const num_likes =
    req.body.num_likes.split(" ")[req.body.num_likes.split(" ").length - 1];

  // INCREASE IT BY ONE FOR EACH UPVOTE
  const formatted_num_likes = Number(num_likes) + 1;

  // UPDATE ARTICLE_COMMENT TABLE

  //PURPOSE: UPDATE COUNT OF `num_likes` property of an article
  //INPUT: ID
  //OUTPUT: NONE
  global.db.run(
    "UPDATE articles SET num_likes = ? where id = ?",
    [formatted_num_likes, articleid],
    function (err) {
      if (err) console.error(err);
      else {
        // Redirect to the reader - article page
        res.redirect(`/reader/article/${articleid}`);
      }
    }
  );
};

// LOAD THE READER - ARTICLE DURING AN REDIRECT
const goArticleAfterLike = (req, res, next) => {
  // GET DATA FROM PREVIOUS MIDDLEWARE
  const title = req.title;
  const subtitle = req.subtitle;
  const author = req.author;
  const request = req.path;
  const articleid = request.split("/")[request.split("/").length - 1];

  //PURPOSE: JOIN `articles` & `article_comments` table. GET ALL PROPERTIES BY `articleid`
  //INPUT: ID
  //OUTPUT: NONE
  global.db.all(
    `SELECT * FROM articles FULL OUTER JOIN\
    article_comments ON articles.id = article_comments.article_id\
    WHERE articles.id = ${articleid}`,
    function (err, rows) {
      if (err) {
        next(err); //SEND THE ERROR ON TO THE ERROR HANDLER
      } else {
        // RENDER THE TEMPLATE
        const articleTitle = rows[0].title;
        const articleSubtitle = rows[0].subtitle;
        const articleCreatedAt = rows[0].created_at;
        const articleModifiedAt = rows[0].modified_at;
        const articleBody = rows[0].body;
        const articleNumLikes = rows[0].num_likes;
        const commentRows = rows;
        res.render("readerArticle.ejs", {
          titleDescription,
          location: "Reader - Article",
          article_id: articleid,
          article_title: articleTitle,
          article_subtitle: articleSubtitle,
          article_created_at: articleCreatedAt,
          article_modified_at: articleModifiedAt,
          article_body: articleBody,
          article_numlikes: articleNumLikes,
          commentRows: commentRows,
          title: title,
          subtitle: subtitle,
          author: author,
        });
      }
      next();
    }
  );
};

// UPDATE `ARTICLE_COMMENT` TABLE WITH USER COMMENT
const addArticleComment = (req, res, next) => {
  const articleid = Number(req.params.articleid);
  const comment = req.body.comment__input;
  const created_at = format(new Date(), "yyyy/LL/dd HH:mm:ss");

  //PURPOSE: INSERT USER COMMENT INTO THE `ARTICLE_COMMENT` TABLE
  //INPUT: ID, COMMENT, CREATED_AT
  //OUTPUT: NONE
  global.db.run(
    "INSERT INTO article_comments ('article_id', 'comments', 'article_created_at') VALUES(?, ?, ?)",
    [articleid, comment, created_at],
    function (err) {
      if (err) console.error(err);
      else {
        // RELOAD THE PAGE AFTER USER COMMENT IS SUBMITTED
        res.redirect(`/reader/article/${articleid}#comment-form`);
      }
    }
  );
};

//------------- Routes -----------//

//1. READER - HOME ROUTE
router.route("/home").get(getAuthorInformation, renderArticles);

//2. ROUTES TO SPECIFIC READER ARTICLE
router
  .route("/article/:articleid")
  .post(getAuthorInformation, goArticleFromHome)
  .get(getAuthorInformation, goArticleAfterLike);

//3. ROUTE TO UPDATE `LIKES` ASSOCIATED WITH AN ARTICLE
router
  .route("/article/:articleid/like")
  .post(getAuthorInformation, updateArticleLikes);

//4. ROUTE TO UPDATE USER COMMENT ASSOCIATED WITH AN ARTICLE
router
  .route("/article/:articleid/comment")
  .post(getAuthorInformation, addArticleComment);

//EXPORT READER ROUTER
module.exports = router;

// Routes - Reader.js - End


// Routes - main.ejs - start
<!-- MAIN TEMPLATE LAYOUT FILE FOR THE MICRO-BLOGGING PROJECT -->
<!-- IDEA INSPIRED BY = `The Net Ninja` Youtuber in his Youtube Series -->
<!-- Youtube Series link - https://www.youtube.com/watch?v=-foo92lFIto&list=PL4cUxeGkcC9hAJ-ARcYq_z6lDZV7kT1xD&pp=iAQB -->
<!DOCTYPE html>
<html lang="en">

<!-- HEAD -->

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- DYNAMICALLY UPDATE TITLE DESCRIPTION -->
  <meta name="description" content="<%= titleDescription.description %>">

  <!-- LINK TO CSS -->
  <link rel="stylesheet" href="/css/style.css" type="text/css">

  <!-- LINK TO JS -->
  <script src="/js/script.js" defer></script>

  <!-- DYNAMICALLY UPDATE TITLE -->
  <title>
    <%= titleDescription.title %>
  </title>
</head>

<!-- BODY -->

<body>
  <!-- USE `header.ejs` FILE TO RENDER HEADER IN ALL TEMPLATES-->
  <header>
    <%- include('../partials/header.ejs') %>
  </header>

  <!-- BODY LAYOUT CONTENT TO BE DYNAMICALLY POPULATED BY EJS FILES  -->
  <%- body %>

    <!-- USE `footer.ejs` FILE TO RENDER FOOTER IN ALL TEMPLATES -->
    <footer>
      <%- include('../partials/footer.ejs') %>
    </footer>

</body>

</html>

// Routes - main.ejs - end

// Routes - footer.ejs - start
          
<p><span>&copy</span> Bobby - AML Micro - Blogging</p>   

// Routes - footer.ejs - end

// Routes - authorEdit.ejs - start
  <!-- LAYOUT FOR AUTHOR EDIT ARTICLE PAGE -->

<section class="author-box">

  <!-- LINK TO HOME   -->
  <div class="author__setting">
    <a href="/author/home">&#9794;Home</a>
  </div>

  <!-- CONDITION: CHECKS IF REQUEST IS EDIT OR CREATE -->
  <% if (requestType && requestType=="edit" ) { %>
    <div class="articles center">

      <!-- DISPLAY ARTICLE INFORMATION -->
      <div class="article__info">

        <!-- CREATED AT TIMESTAMP-->
        <span>Created: <%= created_at %></span>

        <!-- MODIFIED AT TIMESTAMP-->
        <span>Last Modified: <%= modified_at %></span>

        <!-- STATUS-->
        <span>Status: Draft</span>
      </div>
    </div>

    <% } %>
      <!-- IF EDIT - RENDER THE EDIT PAGE WITH ARTICLE INFORMATION -->
      <!-- EDIT ARTICLE -->
      <% if (requestType && requestType=="edit" ) { %>

        <!-- A FORM THAT POSTS TO `/author/article/<%#= articleid %>/edit` ENDPOINT-->
        <form method="POST" action="/author/article/<%= articleid %>/edit" class="article__edit">
          <div class="article__edit-title">
            <label class="article-label" for="article_title">Title</label>
            <textarea name="article_title" id="article_title" cols="60" rows="2"
              required><%= article_title %></textarea>
          </div>
          <div class="article__edit-subtitle">
            <label class="article-label" for="article_subtitle">Subtitle</label>
            <textarea name="article_subtitle" id="article_subtitle" cols="60" rows="2"
              required><%= article_subtitle %></textarea>
          </div>
          <div class="article__edit-body">
            <label class="article-label" for="article_body">Body</label>
            <textarea name="article_body" id="article_body" cols="30" rows="10" required><%= article_body %></textarea>
          </div>
          <button class="article__article-btn" type="submit">UPDATE</button>
        </form> %>

        <!-- IF CREATE - RENDER THE EDIT PAGE WITHOUT ARTICLE INFORMATION -->
        <!-- CREATE NEW ARTICLE -->
        <% } else { %>

          <!-- A FORM THAT POSTS TO `/author/article/create` ENDPOINT-->
          <form method="POST" action="/author/article/create" class="article__edit">
            <div class="article__edit-title">
              <label class="article-label" for="article_title">Title</label>
              <textarea name="article_title" id="article_title" cols="60" rows="2" required></textarea>
            </div>
            <div class="article__edit-subtitle">
              <label class="article-label" for="article_subtitle">Subtitle</label>
              <textarea name="article_subtitle" id="article_subtitle" cols="60" rows="2" required></textarea>
            </div>
            <div class="article__edit-body">
              <label class="article-label" for="article_body">Body</label>
              <textarea name="article_body" id="article_body" cols="30" rows="10" required></textarea>
            </div>
            <button class="article__article-btn" type="submit">CREATE</button>
          </form> %>
          <% } %>
</section>        

// Routes - authorEdit.ejs - end

// Routes - authorHome.ejs - start
          <!-- LAYOUT FOR AUTHOR HOME PAGE -->

<section class="author-box">

  <!-- LINK TO SETTING -->
  <div class="author__setting">
    <a href="/author/setting">&#9794;Settings</a>
  </div>

  <!-- DRAFT ARTICLES SECTION   -->
  <div class="articles">
    <h1 id="draft_article" class="reader__location">Draft Articles</h1>

    <div class="author__article-box">

      <!-- DRAFT ARTICLES SECTION - HEADINGS -->
      <div class="author__article-headings">
        <h3>Title</h3>
        <h3 class="author__article-subtitle">Subtitle</h3>
        <h3>Created</h3>
        <h3>Last Modified</h3>
        <h3>Actions</h3>
      </div>

      <!-- DRAFT ARTICLES SECTION - ARTICLES -->
      <div class="author__articles">
        <% for( let i=0; i < draftArticles.length; i++ ) { %>
          <div class="author__article-row">
            <span>
              <%= draftArticles[i].title %>
            </span>
            <span>
              <%= draftArticles[i].subtitle %>
            </span>
            <span>
              <%= draftArticles[i].created_at %>
            </span>
            <span>
              <%= draftArticles[i].modified_at %>
            </span>

            <!-- DRAFT ARTICLES SECTION - ACTIONS = EDIT | PUBLISH | DELETE -->
            <div class="author__actions">
              <form action="/author/article/<%= draftArticles[i].id %>/edit" method="GET">
                <button class="author__article-action">EDIT</button>
              </form>
              <form action="/author/article/<%= draftArticles[i].id %>/publish" method="POST">
                <button class="author__article-action">PUBLISH</button>
              </form>
              <form action="/author/article/<%= draftArticles[i].id %>/delete" method="POST">
                <button class="author__article-action">DELETE</button>
              </form>
            </div>
          </div>
          <% } %>
      </div>

      <!-- DRAFT ARTICLES SECTION - ACTIONS = CREATE NEW DRAFT -->
      <form action="/author/article/create" method="GET">
        <button class="article__article-btn" type="submit">Create New Draft</button>
      </form>
    </div>

  </div>

  <!-- PUBLISHED ARTICLES SECTION   -->
  <div class="articles">
    <h1 id="published_article" class="reader__location">Published Articles</h1>

    <!-- PUBLISHED ARTICLES SECTION - HEADINGS-->
    <div class="author__article-headings">
      <h3>Title</h3>
      <h3 class="author__article-subtitle">Subtitle</h3>
      <h3>Created</h3>
      <h3>Published</h3>
      <h3>Likes</h3>
      <h3>Actions</h3>
    </div>

    <!-- PUBLISHED ARTICLES SECTION - LATEST ARTICLES -->
    <% for( let i=publishedArticles.length - 1; i>= 0; i-- ) { %>
      <% if (i===publishedArticles.length - 1) { %>
        <span class="latest-published">
          Latest Published
        </span>
        <div class="author__article-row latest">
          <span>
            <%= publishedArticles[i].title %>
          </span>
          <span>
            <%= publishedArticles[i].subtitle %>
          </span>
          <span>
            <%= publishedArticles[i].created_at %>
          </span>
          <span>
            <%= publishedArticles[i].modified_at %>
          </span>
          <span>
            <%= publishedArticles[i].num_likes %>
          </span>

          <!-- PUBLISHED ARTICLES SECTION - LATEST ARTICLE - ACTIONS = SHARE | DELETE -->
          <div id="author__actions" class="author__actions">
            <button id="btn-share" class="author__article-action btn-share-<%= publishedArticles[i].id%>">SHARE</button>
            <form action="/author/article/<%= publishedArticles[i].id %>/delete" method="POST">
              <button class="author__article-action">DELETE</button>
            </form>
            <div class="article__share-box">
              <a href="http://localhost:3000/reader/article/<%= publishedArticles[i].id %>">&#9741;&nbsp;
                http://localhost:3000/reader/article/<%= publishedArticles[i].id %></a>
            </div>
          </div>
        </div>
        %>

        <!-- PUBLISHED ARTICLES SECTION - OTHER ARTICLES -->
        <% } else { %>
          <div class="author__article-row">
            <span>
              <%= publishedArticles[i].title %>
            </span>
            <span>
              <%= publishedArticles[i].subtitle %>
            </span>
            <span>
              <%= publishedArticles[i].created_at %>
            </span>
            <span>
              <%= publishedArticles[i].modified_at %>
            </span>
            <span>
              <%= publishedArticles[i].num_likes %>
            </span>

            <!-- PUBLISHED ARTICLES SECTION - OTHER ARTICLES - ACTIONS = SHARE | DELETE -->
            <div id="author__actions" class="author__actions">
              <button id="btn-share"
                class="author__article-action btn-share-<%= publishedArticles[i].id%>">SHARE</button>
              <form action="/author/article/<%= publishedArticles[i].id %>/delete" method="POST">
                <button class="author__article-action">DELETE</button>
              </form>
              <div class="article__share-box">
                <a href="http://localhost:3000/reader/article/<%= publishedArticles[i].id %>">&#9741;&nbsp;
                  http://localhost:3000/reader/article/<%= publishedArticles[i].id %></a>
              </div>
            </div>
          </div>
          <% } %>
            <% } %>
  </div>
  </div>
</section>
// Routes - authorHome.ejs - end
        
// Routes - authorSetting.ejs - end
        <!-- LAYOUT FOR AUTHOR SETTING PAGE -->
<section class="author-box">

  <!-- LINK TO HOME -->
  <div class="author__setting">
    <a href="/author/home">&#9794;Home</a>
  </div>

  <!-- A FORM THAT POSTS TO `/author/setting` ENDPOINT - To update blog information-->
  <form method="POST" action="/author/setting" class="article__edit">
    <div class="article__edit-title">
      <label class="article-label" for="blog_title">Title</label>
      <textarea name="blog_title" id="blog_title" cols="60" rows="2" required><%= title %></textarea>
    </div>
    <div class="article__edit-subtitle">
      <label class="article-label" for="blog_subtitle">Subtitle</label>
      <textarea name="blog_subtitle" id="blog_subtitle" cols="60" rows="2" required><%= subtitle %></textarea>
    </div>
    <div class="setting__edit-author">
      <label class="article-label" for="blog_author">Author</label>
      <textarea name="blog_author" id="blog_author" cols="60" rows="2" required><%= author %></textarea>
    </div>
    <button class="article__article-btn" type="submit">UPDATE</button>
  </form>
</section>

// Routes - authorSetting.ejs - end
        

// Routes - readerArticle.ejs - start
        <!-- LAYOUT FOR READER EDIT ARTICLE PAGE -->
<section class="box">

  <!-- LINK TO HOME -->
  <div class="author__setting">
    <a href="/reader/home">&#9794;Home</a>
  </div>

  <!-- EDIT ARTICLE SECTION -->
  <div class="articles">

    <!-- FORM THAT POSTS TO `/reader/article/:articleid/likes` ENDPOINT 
    - To update number of likes of an article-->
    <form action="/reader/article/<%= article_id %>/like" class="article__likes" method="POST">
      <input type="submit" name="num_likes" id="num_likes" value="&hearts; <%= article_numlikes %>">
    </form>

    <!-- EDIT ARTICLE SECTION - HEADINGS -->
    <div class="article__heading">
      <span id="title" class="article__title">Title:
        <%= article_title %>
      </span>
      <span class="article__date">
        Published At: <%= article_modified_at %>
      </span>
    </div>

    <span class="article__subtitle">
      Subtitle: <%= article_subtitle %>
    </span>

    <!-- EDIT ARTICLE SECTION - BODY -->
    <div class="article__body_box">
      <p class="article__body">
        <%= article_body %>
      </p>
    </div>
  </div>

  <!-- EDIT ARTICLE SECTION - COMMENT-->
  <div class="comments">

    <!-- EDIT ARTICLE SECTION - INPUT COMMENT-->
    <div class="comment__box">
      <label id="comment-form" for="comment__form" class="comment__text">Comment Text &colon; </label>
      <form class="comment__form" action="/reader/article/<%= article_id %>/comment" method="POST">
        <textarea class="comment__input" placeholder="Enter comment" name="comment__input" id="comment__input" cols="20"
          rows="20"></textarea>
        <input class="comment__submit" type="submit" value="ADD COMMENT">
      </form>
    </div>

    <!-- EDIT ARTICLE SECTION - DISPLAY COMMENT -->
    <div class="comment">
      <% for( let i=0; i < commentRows.length; i++ ) { %>
        <div class="comment-posted">
          <span>
            <%= commentRows[i].comments %>
          </span>
          <span>
            <%= commentRows[i].article_created_at %>
          </span>
        </div>
        <% } %>
    </div>

  </div>



</section>

// Routes - readerArticle.ejs - end
        
// Routes - readerHome.ejs - start
   <!-- LAYOUT FOR READER HOME PAGE -->

<section class="box">

  <!-- READER HOME PUBLISHED ARTICLE -->
  <div class="articles">
    <h1 class="reader__location">Published Articles</h1>
  </div>

  <!-- READER HOME PUBLISHED ARTICLE - HEADINGS-->
  <div class="reader__article-headings">
    <h3>Title</h3>
    <h3>Published At</h3>
  </div>

  <!-- READER HOME PUBLISHED ARTICLE - ARTICLES -->
  <div class="article-list">
    <% for( let i=articleRows.length - 1; i>=0 ; i-- ) { %>
      <% if (articleRows[i].is_published===1) { %>
        <form action="/reader/article/<%= articleRows[i].id %>" method="POST">
          <input type="submit" name="<%= articleRows[i].title %>" id="<%= articleRows[i].title %>"
            value="<%= articleRows[i].title %>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%= articleRows[i].modified_at %>">
        </form>
        <div>&nbsp;</div>
        <div>&nbsp;</div>

        <% } %>
          <% } %>
  </div>


</section>     

// Routes - readerHome.ejs - end
        
// Routes - index.js - start
        
        //IMPORT CORE MODULES
const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const expressLayout = require("express-ejs-layouts");

//CONFIGURE PORT NUMBER
const port = 3000;

//CONFIGURE PUBLIC FOLDER: STORES CSS, JS, IMAGE ASSETS
app.use(express.static(path.join(__dirname, "public")));

//ENABLE PARSING OF FORMS IN EXPRESS
app.use(express.urlencoded({ extended: false }));

//CONFIGURE TEMPLATING AND VIEW ENGINE
app.use(expressLayout);

// USE `./views/layout/main.ejs` AS MAIN TEMPLATE LAYOUT FILE
app.set("layout", "./layouts/main");

// USE `ejs` AS VIEW ENGINE
app.set("view engine", "ejs");

// CONFIGURE AND MOUNT READER ROUTER
const readerRoute = require("./routes/reader");
app.use("/reader", readerRoute);

// CONFIGURE AND MOUNT AUTHOR ROUTER
const authorRoute = require("./routes/author");
app.use("/author", authorRoute);

//items in the global namespace are accessible throught out the node application
global.db = new sqlite3.Database("./database.db", function (err) {
  if (err) {
    console.error(err);
    process.exit(1); //Bail out we can't connect to the DB
  } else {
    console.log("Database connected");
    global.db.run("PRAGMA foreign_keys=ON"); //This tells SQLite to pay attention to foreign key constraints
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Routes - readerHome.ejs - end
        
// db_schema_.sql - start
        
        -- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;

--create your tables with SQL commands here (watch out for slight syntactical differences with SQLite)

-- Create articles (Parent) table. 
CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  created_at TEXT NOT NULL,
  modified_at TEXT NOT NULL,
  body TEXT NOT NULL,
  num_likes INTEGER NOT NULL,
  is_published INTEGER NOT NULL
);

-- Create article_comments (Child) table.
CREATE TABLE IF NOT EXISTS article_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER,
  comments TEXT,
  article_created_at TEXT,
  FOREIGN KEY(article_id) REFERENCES articles 
  ON DELETE CASCADE
);

-- Create Author Header table - Stores Microblog title, subtitle, author
CREATE TABLE IF NOT EXISTS blog (
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- INSERT INTIAL ROW INTO `blog` table
INSERT INTO blog VALUES('AML Micro-Blogging', 'Anti Money Laundering, KYC, Customer Onboarding', 'Bobby');

COMMIT;


// db_schema_.sql - end

          


