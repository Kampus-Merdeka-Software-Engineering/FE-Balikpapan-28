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
  const commentsList = document.getElementById("comment-list");
  const contentId = commentForm.getAttribute("name");

  fetch(`/data?content=${contentId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error")
      }
      return res.json()
    })
    .then((data) => {
      commentsList.innerHTML = ''
      data.forEach((comment) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${comment.name}</strong> (${comment.email}): ${comment.comment}`;
        commentsList.appendChild(li);
      })
    })
    .catch((err) => {
      console.log("Error: " + err)
    })

  // commentForm.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const name = document.getElementById("name").value;
  //   const email = document.getElementById("email").value;
  //   const comment = document.getElementById("comment").value;

  //   const li = document.createElement("li");
  //   li.innerHTML = `<strong>${name}</strong> (${email}): ${comment}`;

  //   commentList.appendChild(li);

  //   commentForm.reset();
  // });
});
