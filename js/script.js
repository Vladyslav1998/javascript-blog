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

const links = document.querySelectorAll('.titles a');

for (let link of links) {
   link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
   optTitleSelector = '.post-title',
   optTitleListSelector = '.titles';

function generateTitleLinks() {

   const titleList = querySelector(optTitleListSelector);
   titleList.innerHTML = '';

   const articles = document.querySelectorAll(optArticleSelector);

   let html = '';

   for (let articles of articles) {

      const articleId = article.getAttribute('id');

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      html = html + linkHTML;

   }

   titleList.innerHTML = html;
   
}

generateTitleLinks();