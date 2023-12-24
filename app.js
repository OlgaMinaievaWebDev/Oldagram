const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main");
function renderPost() {
  let postFeed = "";
  for (let i = 0; i < posts.length; i++) {
    postFeed += `<div class='content' >
   <div class='section'>
   <div class = 'top-content'>
   <img class = 'avatar' src = ${posts[i].avatar} alt = 'avatar image'>
   <div class='names'>
   <h3>${posts[i].name}</h3>
   <p>${posts[i].location}</p>
   </div>
   </div>
   <img class = 'post' src = ${posts[i].post} alt = 'user post'>
   <div class ='bottom'>
   <div class = 'icons'>
   <button class="btn"><img class="like" src="images/icon-heart.png" alt="heart"></button>
    <button class="btn"><img class="comment" src="images/icon-comment.png" alt="comment on post"></button> 
    <button class="btn"><img class="dm" src="images/icon-dm.png" alt="dm the user"></button>    
   </div>
    <p class="likes"><span id="num-likes${i}">${posts[i].likes}</span> likes</p>
     <div class="comments">
     <p id="comment"></p>
     <span id="username">${posts[i].username}</span> ${posts[i].comment}</p>
     </div>
   </div>
    </div>`;
  }

  mainEl.innerHTML = postFeed;
}

renderPost();
