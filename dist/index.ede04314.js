const feedCont = document.querySelector("#fullpage");
const trendCont = document.querySelector("#trend__main-cont");
const searchField = document.querySelector("#search__field");
const searchBtn = document.querySelector("#search__btn");
const tagsCont = document.querySelector(".banner--tags-cont");
const tags = document.querySelector(".banner--tags-cont").querySelectorAll(".tag");
let artTime = document.querySelector("#art__time");
let artTitle = document.querySelector("#art__title");
let artName = document.querySelector("#art__name");
let artUpdated = document.querySelector("#art__updated");
let artImg = document.querySelector("#art__img");
let artContent = document.querySelector("#art__content");
let feed;
const showFeed = async (_url)=>{
    try {
        const res = await fetch(_url);
        feed = await res.json();
        renderFeed(feedCont);
        renderTrends(trendCont);
    } catch (err) {
        errorMsg();
        console.log(err);
    }
};
showFeed(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b0b5f4c2964946959515f8364cdee00e`);
const searchStories = ()=>{
    loading();
    showFeed(`https://newsapi.org/v2/everything?q=${searchField.value}&from=2022-09-13&to=2022-09-13&sortBy=popularity&apiKey=b0b5f4c2964946959515f8364cdee00e`);
};
searchBtn.addEventListener("click", searchStories);
tags.forEach((tag)=>{
    tag.addEventListener("click", ()=>{
        loading();
        tags.forEach((t)=>t.classList.remove("active"));
        tag.classList.add("active");
        showFeed(`https://newsapi.org/v2/everything?q=${tag.textContent}&from=2022-09-13&to=2022-09-13&sortBy=popularity&apiKey=b0b5f4c2964946959515f8364cdee00e`);
    });
});

//# sourceMappingURL=index.ede04314.js.map
