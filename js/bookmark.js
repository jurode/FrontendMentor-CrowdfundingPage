let bookmark = document.getElementById("bookmark");
let bookmarkObj = document.querySelector("#bookmark object");
let bookmarkSpan = document.querySelector("#bookmark span");

bookmark.addEventListener("click", () => {
    // bookmarkSpan.style.display = "block";
    if (bookmark.classList.contains("bookmark")){
        bookmark.classList.add("bookmarked");
        bookmark.classList.remove("bookmark");
        bookmarkSpan.innerHTML = "bookmarked";
    } else {
        bookmark.classList.add("bookmark");
        bookmark.classList.remove("bookmarked");
        bookmarkSpan.innerHTML = "bookmark";

    }
    console.log("event");
});