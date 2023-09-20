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
