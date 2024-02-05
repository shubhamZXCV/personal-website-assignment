displayComments();

function addComment() {

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    const commentText = document.querySelector('textarea').value;
    let d= new Date();
    const comment={text:commentText,time:`${d.getHours()}:${d.getMinutes()}`};
    comments.push(comment);

    localStorage.setItem('comments', JSON.stringify(comments));

    document.querySelector('textarea').value="";

     displayComments();
}

function displayComments() {
    let display = document.querySelector(".comment-display");
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    display.innerHTML = "";

    comments.forEach((comment) => {
        let createCommentDiv = document.createElement("div");
        createCommentDiv.className = "comment";

        let createProfileDiv = document.createElement("div");
        createProfileDiv.className = "comment-head";
        createCommentDiv.appendChild(createProfileDiv);


        let createProfileImg = document.createElement("img");
        createProfileImg.src = "Assets/profile.webp";
        createProfileDiv.appendChild(createProfileImg);

        let createTimeSpan=document.createElement("span");
        createTimeSpan.innerHTML=comment.time;
        createProfileDiv.appendChild(createTimeSpan);


        let commentContentDiv = document.createElement("div");
        commentContentDiv.innerHTML = comment.text;
        createCommentDiv.appendChild(commentContentDiv);

     
        display.appendChild(createCommentDiv);
        
   })
}

