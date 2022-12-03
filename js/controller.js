const feedCont = document.querySelector('#fullpage'); 
const trendCont = document.querySelector('#trend__main-cont');
const searchField = document.querySelector('#search__field');
const searchBtn = document.querySelector('#search__btn');
const tagsCont = document.querySelector('.banner--tags-cont');
const tags = document.querySelector('.banner--tags-cont').querySelectorAll(".tag");

let feed; 
const apiKey = '892c4f588ddf4700a28dedcfb127d9f9';

const showFeed = async (_url) => {
    try {
        const res = await fetch(_url);
        feed = await res.json();
        console.log(feed);
        renderFeed(feedCont);
        renderTrends(trendCont);
        
    } catch (err) {
        errorMsg();
        console.log(`Err: ${err}`)
    }
};


showFeed(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`);

const searchStories = () => {
    loading();
    showFeed(`https://newsapi.org/v2/everything?q=${searchField.value}&from=2022-11-03&sortBy=publishedAt&apiKey=${apiKey}`)
}

searchBtn.addEventListener('click', searchStories);

tags.forEach((tag) => {
    tag.addEventListener('click', () => {
        loading();
        tags.forEach((t) => t.classList.remove('active'));
        tag.classList.add('active');
        showFeed(`https://newsapi.org/v2/everything?q=${tag.textContent}&from=2022-11-03&sortBy=publishedAt&apiKey=${apiKey}`)
    })
});





























