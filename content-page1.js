// Memulai Navbar
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tombol-about-us")
    .addEventListener("click", function () {
      window.location.href = "main-page.html#about-us";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tombol-timeline")
    .addEventListener("click", function () {
      window.location.href = "main-page.html#timeline";
    });
});

// Memulai Komentar

document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("comment-list");

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> (${email}): ${comment}`;

    commentList.appendChild(li);

    commentForm.reset();
  });
});
