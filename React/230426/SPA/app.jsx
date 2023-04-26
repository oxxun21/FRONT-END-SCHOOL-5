const container = document.querySelector('#root');

// 환경 변수는 보통 대문자로 선언
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = `https://api.hnpwa.com/v0/item/$id.json`;

// 현재 사용자가 보고있는 페이지 정보, 화면에 보여질 아이템의 개수 저장 객체
const store = {
  currentPage: 1,
  datasPerPage: 10
};

// API 데이터 받아오기
async function getData(url){
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('네트워크 문제 발생')
    }
    return response.json();
  }catch(error){
    console.log(error);
  }
}

// 데이터 저장
async function newsFeed(){
  const newsFeed = await getData(NEWSLIST_URL);
  const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);
  const newsList = [];

  newsList.push('<ul>');

  for(let i = (store.currentPage - 1) * store.datasPerPage ; i < store.currentPage * store.datasPerPage; i++){
    newsList.push(`
      <li>
        <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
      </li>
    `);
  }
  newsList.push('</ul>');

  let pageList = ``;
  for (let i = 0; i < totalPages; i++){
    pageList += `<li><a href="#/page/${i + 1}">${i + 1}</a></li>`;
  }

  newsList.push(
    `<nav>
      <ul>
        ${pageList}
      </ul>
    </nav>`
  );
  
  container.innerHTML = newsList.join('');
}
newsFeed();

// newsDetail 페이지 구성
async function newsDetail(){
  const id = location.hash.substring(9);
  const newsContent = await getData(CONTENT_URL.replace('$id', id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div><a href="#/page/${store.currentPage}">목록으로 돌아가기</a></div>
  `;
}

// 라우터 : 화면을 중계하는 함수
function router(){
  const routePath = location.hash;

  if (routePath === ''){
    newsFeed();
  } else if (routePath.indexOf('#/page/') >= 0){
    store.currentPage = parseInt(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();
