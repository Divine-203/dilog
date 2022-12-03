/*
{
"status": "ok",
"totalResults": 320,
-"articles": [
    -{
    -"source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
    },
    "author": "Ben Eisen",
    "title": "Mortgage Rates Top 6% for the First Time Since the 2008 Financial Crisis - The Wall Street Journal",
    "description": "<ol><li>Mortgage Rates Top 6% for the First Time Since the 2008 Financial Crisis  The Wall Street Journal\r\n</li><li>Mortgage rates top 6% for the first time since 2008  CNN\r\n</li><li>Housing: Mortgage rates breach 6% for first time since 2008  Yahoo Finance\r\n…",
    "url": "https://www.wsj.com/articles/mortgage-rates-hit-6-02-highest-since-the-financial-crisis-11663250402",
    "urlToImage": "https://images.wsj.net/im-623419/social",
    "publishedAt": "2022-09-15T15:34:00Z",
    "content": "Mortgage rates topped 6% this week, their highest level since 2008, giving a jolt to home buyers who last year were paying less than half that.\r\nThe average rate on a 30-year fixed mortgage climbed t… [+281 chars]"
    },
    
    
*/


const errorMsg = () => {
    feedCont.innerHTML = '';
    trendCont.innerHTML = '';
    feedCont.insertAdjacentHTML('afterbegin', `<h2 class="title text-center">No results Found :(</h2>`);
//    trendCont.insertAdjacentHTML('afterbegin', `<h2 class="title text-center">No results Found!</h2>`);
}


const renderArticle = (time, title, name, img_url, content) => {
    const articleData = {
        time: time,
        title: title,
        name: name,
        date: time,
        img_url: img_url,
        content: content
    };
    localStorage.setItem("articleData", JSON.stringify(articleData));
}

const popUp = (img_url, time, title, des, name, url) => {
    document.querySelector('#pop__img').src = img_url;
    document.querySelector('#pop__time').innerHTML = calcDiffDate(time);
    document.querySelector('#pop__title').innerHTML = title;
    document.querySelector('#pop__des').innerHTML = des;
    document.querySelector('#pop__name').innerHTML = name;
    
    document.querySelector('#pop__read-more').addEventListener('click', () => {
        window.open(url, '_blank');
    });
    
    document.querySelector('.pop-up').style.display = "flex";
    document.querySelector('.pop-up .pop-up__data-cont').classList.add('fade-in');
    document.querySelector('.pop-up .pop-up__data-cont').classList.remove('fade-out');
}
const popOut = () => {
    document.querySelector('.pop-up .pop-up__data-cont').classList.add('fade-out');
    document.querySelector('.pop-up .pop-up__data-cont').classList.remove('fade-in');
    setTimeout(() => document.querySelector('.pop-up').style.display = "none", 250);
}

const calcDiffDate = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const diffTimeStr = diffTime/1000 + " seconds ago";
    const diffDayStr =  diffDays + " days ago";
    return diffDays >= 1 ? diffDayStr : diffTimeStr;
}

const loading = () => {
    const feedLoader = `
            <div class="col-12 feed--main-card-cont">
                 <div class="feed--main-card loader">
                    <div class="img-cont"></div>
                    <div class="data-cont">
                        <p class="sm placeholder">2 min ago.</p>
                        <h2 class="title placeholder">The Title of the Blog</h2>
                        <p class="sm txt-body placeholder">The body of the article goes here along with some other text but not everything so you don’t reveal too much to the reader with some other text but not everything so you don’t reveal too much to the reader...</p>
                    </div>
                    <div class="bottom-cont">
                        <div class="writer-cont">
                            <div class="pfp-holder"></div>
                            <p class="sm name placeholder"></p>
                        </div>

                        <a href="article.html" class="btn btn-primary ms-auto">Read more</a>
                    </div>
                </div>
            </div>
        `;
    const trendLoader = `
    <div class="feed--trend-card loader">
            <div class="img-holder"></div>
            <div class="data-cont placeholder-glow">
                <p class="sm placeholder">2 min ago.</p>
                <h2 class="title placeholder">The Title of the Blog</h2>
                <a class="btn btn-primary placeholder">Read</a>
            </div>
        </div>
        <div class="feed--trend-card loader">
            <div class="img-holder"></div>
            <div class="data-cont placeholder-glow">
                <p class="sm placeholder">2 min ago.</p>
                <h2 class="title placeholder">The Title of the Blog</h2>
                <a class="btn btn-primary placeholder">Read</a>
            </div>
        </div>
        <div class="feed--trend-card loader">
            <div class="img-holder"></div>
            <div class="data-cont placeholder-glow">
                <p class="sm placeholder">2 min ago.</p>
                <h2 class="title placeholder">The Title of the Blog</h2>
                <a class="btn btn-primary placeholder">Read</a>
            </div>
        </div>
        <div class="feed--trend-card loader">
            <div class="img-holder"></div>
            <div class="data-cont placeholder-glow">
                <p class="sm placeholder">2 min ago.</p>
                <h2 class="title placeholder">The Title of the Blog</h2>
                <a class="btn btn-primary placeholder">Read</a>
            </div>
        </div>
    `;
        
    feedCont.innerHTML = '';
    trendCont.innerHTML = '';
    feedCont.insertAdjacentHTML('afterbegin', feedLoader);
    trendCont.insertAdjacentHTML('afterbegin', trendLoader);
}




const renderFeed = (parentEl) => {
    parentEl.innerHTML = '';
    for(let i = 0; i < feed.articles.length; i++){
        const date1 = new Date(feed.articles[i].publishedAt);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const diffTimeStr = diffTime/1000 + " seconds ago";
        const diffDayStr =  diffDays + " days ago";
        const finalStr = diffDays >= 1 ? diffDayStr : diffTimeStr;
        
        const markup = `
            <div class="section col-12 feed--main-card-cont">
                 <div class="feed--main-card active">
                    <div class="img-cont">
                        <img src=${feed.articles[i].urlToImage} class="img-fluid" />
                    </div>
                    <div class="data-cont">
                        <p class="sm">${calcDiffDate(feed.articles[i].publishedAt)}</p>
                        <h2 class="title">${feed.articles[i].title}</h2>
                        <p class="sm txt-body">${feed.articles[i].description}</p>
                    </div>
                    <div class="bottom-cont">
                        <div class="writer-cont">
                            <div class="pfp-holder"></div>
                            <p class="sm name">${feed.articles[i].author}</p>
                        </div>
                        <a class="btn btn-primary ms-auto btn-read__more" href=${feed.articles[i].url} target="_blank">Read more</a>
                    </div>
                </div>
            </div>
        `;   
        parentEl.insertAdjacentHTML('afterbegin', markup);
        document.querySelector('.btn-read__more').addEventListener('click', () => {
            renderArticle(feed.articles[i].publishedAt,feed.articles[i].title,feed.articles[i].author,feed.articles[i].urlToImage,feed.articles[i].content); 
        });
    }
}

const renderTrends = (parentEl) => {
    parentEl.innerHTML = '';
    document.querySelector('.trend-carousel .carousel-inner').innerHTML = '';
    for(let i = feed.articles.length-1; i > feed.articles.length-5; i--) {
        
        const markup = `
             <div class="feed--trend-card">
                <div class="img-holder">
                    <img src=${feed.articles[i].urlToImage} class="img-fluid" />
                </div>
                <div class="data-cont">
                    <p class="sm">${calcDiffDate(feed.articles[i].publishedAt)}</p>
                    <h2 class="title">${feed.articles[i].title}</h2>
                    <a class="btn btn-primary btn-read">Read</a>
                </div>
            </div>
        `;
//        const markup_mobile = `
//            <div class="carousel-item">
//               <div class="feed--trend-card">
//                    <div class="img-holder">
//                         <img src=${feed.articles[i].urlToImage} class="img-fluid" />
//                    </div>
//                    <div class="data-cont">
//                        <p class="sm">${feed.articles[i].publishedAt}</p>
//                        <h2 class="title">${feed.articles[i].title}</h2>
//                        <a class="btn btn-primary">Read</a>
//                    </div>
//                </div>
//            </div>
//        ` 
//        
//        document.querySelector('.carousel-inner').insertAdjacentHTML('afterbegin', markup_mobile);
        //const popUp = (img_url, time, title, des, name) => {
        parentEl.insertAdjacentHTML('afterbegin', markup);
        document.querySelector('.btn-read').addEventListener('click', () => {
            popUp(feed.articles[i].urlToImage, feed.articles[i].publishedAt, feed.articles[i].title, feed.articles[i].description, feed.articles[i].author, feed.articles[i].url); 
        });

        document.querySelector('.pop-up .overlay').addEventListener('click', () => {
            popOut();
        });
    }
}






// articlePage

// const storedData = JSON.parse(localStorage.getItem("articleData"));

// document.querySelector('#art__time').innerHTML = storedData.time !== null ? storedData.time : "";
// document.querySelector('#art__title').innerHTML = storedData.title !== null ? storedData.title : "";
// document.querySelector('#art__name').innerHTML = storedData.name;
// document.querySelector('#art__updated').innerHTML = `Updated ${storedData.time}`;
// document.querySelector('#art__img').src = storedData.img_url;
// document.querySelector('#art__content').innerHTML = storedData.content;


















