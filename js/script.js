'use strict';

const titleClickHandler = function (event) {
   event.preventDefault();
   const clickedElement = this;
   console.log('Link was clicked!');
   console.log('titleClickHandler:', event);

   /* [DONE] remove class 'active' from all article links  */

   const activeLinks = document.querySelectorAll('.titles a.active'); // document ?

   for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
   }

   /* [DONE] add class 'active' to the clicked link */

   console.log('clickedElement:', clickedElement);

   clickedElement.classList.add('active');

   /* [DONE] remove class 'active' from all articles */

   const activeArticles = document.querySelectorAll('.posts .active');

   for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
   }

   /* [DONE] get 'href' attribute from the clicked link */

   const articleSelector = clickedElement.getAttribute('href'); // nie rozumiem

   /* [DONE]find the correct article using the selector (value of 'href' attribute) */

   const targetArticle = document.querySelector(articleSelector); // nie rozumiem

   /* [DONE] add class 'active' to the correct article */

   targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
   optTitleSelector = '.post-title',
   optTitleListSelector = '.titles',
   optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

   const titleList = document.querySelector(optTitleListSelector);

   titleList.innerHTML = '';

   const articles = document.querySelectorAll(optArticleSelector);

   let html = '';

   for (let article of articles) {

      const articleId = article.getAttribute('id');

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      html = html + linkHTML;

   }

   titleList.innerHTML = html;

   const links = document.querySelectorAll('.titles a');

   for (let link of links) {

      link.addEventListener('click', titleClickHandler);
   }
}

generateTitleLinks();

function generateTags(customSelector = '') {
   /* find all articles */
   const articles = document.querySelectorAll(optArticleSelector + customSelector);

   /* START LOOP: for every article: */
   for (let article of articles) {

      /* find tags wrapper */
      const titleList = article.querySelector('optArticleTagsSelector');

      /* make html variable with empty string */
      let HTML = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split('');

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {

         /* generate HTML of the link */
         const tagLinkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

         /* add generated code to html variable */
         html = html + tagLinkHTML;
      }
      /* END LOOP: for each tag */


      /* insert HTML of all the links into the tags wrapper */
      articles.innerHTML = html;

      /* END LOOP: for every article: */
   }
}

generateTags();

function tagClickHandler(event) {
   /* prevent default action for this event */
   event.preventDefault('');

   /* make new constant named "clickedElement" and give it the value of "this" */
   const clickedElement = this;

   /* make a new constant "href" and read the attribute "href" of the clicked element */
   const href = clickedElement.getAttribute('href');

   /* make a new constant "tag" and extract tag from the "href" constant */
   const tag = href.replace('#tag-', '');

   /* find all tag links with class active */
   const allTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

   /* START LOOP: for each active tag link */
   for (let tag of tags) {

      /* remove class active */
      allTagLinks.classList.remote('active');

      /* END LOOP: for each active tag link */
   }

   /* find all tag links with "href" attribute equal to the "href" constant */
   const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

   /* START LOOP: for each found tag link */
   for (let tagLink of tagLinks) {

      /* add class active */
      tagLinks.classList.add('active');

      /* END LOOP: for each found tag link */
   }

   /* execute function "generateTitleLinks" with article selector as argument */
   generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags() {
   /* find all links to tags */
   const allLinksTags = document.querySelectorAll('a [href^="#tag-"]')
   /* START LOOP: for each link */
   for(let allLinkTag of allLinksTags) {

      /* add tagClickHandler as event listener for that link */
      allLinksTags.addClickedElement('click', tagClickHandler);
      /* END LOOP: for each link */
   }
}

addClickListenersToTags();