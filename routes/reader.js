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
