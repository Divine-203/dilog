/**/ //const readMore;
const errorMsg = ()=>{
    feedCont.innerHTML = "";
    trendCont.innerHTML = "";
    feedCont.insertAdjacentHTML("afterbegin", `<h2 class="title text-center">No results Found!</h2>`);
    trendCont.insertAdjacentHTML("afterbegin", `<h2 class="title text-center">No results Found!</h2>`);
};
const renderArticle = (text)=>{
    console.log(text);
};
console.log(document.querySelector("#art__time"));
const loading = ()=>{
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
    feedCont.innerHTML = "";
    trendCont.innerHTML = "";
    feedCont.insertAdjacentHTML("afterbegin", feedLoader);
    trendCont.insertAdjacentHTML("afterbegin", trendLoader);
};
const renderFeed = (parentEl)=>{
    parentEl.innerHTML = "";
    for(let i = 0; i < feed.articles.length; i++){
        const markup = `
            <div class="section col-12 feed--main-card-cont">
                 <div class="feed--main-card active">
                    <div class="img-cont">
                        <img src=${feed.articles[i].urlToImage} class="img-fluid" />
                    </div>
                    <div class="data-cont">
                        <p class="sm">${feed.articles[i].publishedAt}</p>
                        <h2 class="title">${feed.articles[i].title}</h2>
                        <p class="sm txt-body">${feed.articles[i].description}</p>
                    </div>
                    <div class="bottom-cont">
                        <div class="writer-cont">
                            <div class="pfp-holder"></div>
                            <p class="sm name">${feed.articles[i].author}</p>
                        </div>
                        <a class="btn btn-primary ms-auto btn-read__more">Read more</a>
                    </div>
                </div>
            </div>
        `;
        parentEl.insertAdjacentHTML("afterbegin", markup);
        document.querySelector(".btn-read__more").addEventListener("click", ()=>{
            renderArticle(feed.articles[i].title);
        });
    }
};
const renderTrends = (parentEl)=>{
    parentEl.innerHTML = "";
    for(let i = feed.articles.length - 1; i > feed.articles.length - 5; i--){
        const markup = `
             <div class="feed--trend-card">
                <div class="img-holder">
                    <img src=${feed.articles[i].urlToImage} class="img-fluid" />
                </div>
                <div class="data-cont">
                    <p class="sm">${feed.articles[i].publishedAt}</p>
                    <h2 class="title">${feed.articles[i].title}</h2>
                    <a class="btn btn-primary">Read</a>
                </div>
            </div>
        `;
        parentEl.insertAdjacentHTML("afterbegin", markup);
    }
};

//# sourceMappingURL=index.2f002d75.js.map
