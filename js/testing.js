const sideNav = document.getElementById("recentPosts");
const h3Input = document.getElementById('h3Input');
const sumInput = document.getElementById('postBody');
const submit = document.getElementById('addPost');
const newPost = document.getElementById('modalNewPost');
const btnPost = document.getElementById('NewPost');
const modalWrapper = document.getElementById('modalWrapper');
const ulRecentPosts = document.getElementById('ulRecentPosts');
const welcomeModal = document.getElementById('welcomeModal');

const post = {};
let recentPosts = [];

function createPost(){
    //Step 2: Save the values to post.title and post.summary. These will be the basis of the recentPosts section
    post.title = h3Input.value;
    post.summary = sumInput.value;
    console.log('post title: ' + post.title);

    //step 4: check length of recentPosts

    if(recentPosts.length <= 9 ){
        recentPosts.unshift({title: post.title, summary: post.summary});
    } else {
        recentPosts.pop();
        recentPosts.unshift({title: post.title, summary: post.summary});
    }

    sideNav.innerText = "";

    recentPosts.forEach(post => {
        const newDiv = document.createElement('div');
        const newHead = document.createElement('h3');
        const newPara = document.createElement('p');

        // Step 6: Assign values
        newHead.innerText = post.title;
        newPara.innerText = post.summary;

        // Step 7: Add classes
        newDiv.classList.add('sideContent');
        newPara.classList.add('summary');

        // Append elements to the container
        newDiv.appendChild(newHead);
        newDiv.appendChild(newPara);
        sideNav.appendChild(newDiv);
    });
}

function postEditor(){
    newPost.style.display = 'inline-block';
    modalWrapper.style.display = 'block';
}

function welcomeHome(){
    welcomeModal.style.display='block';
}

submit.addEventListener("click", createPost);
btnPost.addEventListener("click", postEditor);

window.onclick = function(event) {
    if(event.target == modalWrapper) {
        modalWrapper.style.display = 'none';
    }
}

window.onload = function(welcomeHome){
    welcomeModal.style.display = 'block';
}