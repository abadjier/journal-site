const viewMoreLink = document.getElementById("view-more-link");
const hiddenPostsList = document.getElementsByClassName("hidden-post");

viewMoreLink.addEventListener("click", function(){
    for (const post of hiddenPostsList) {
        post.style.display = "block";                
    }
});