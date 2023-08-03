const filters = document.querySelector(".sort").children;
const eventLinks = document.querySelectorAll(".event");
const blog = document.querySelector(".blog");
const container = document.querySelector(".contain");
const BLOG_PATH = "../data/blog.json";
const elementToBeRemoved = document.querySelectorAll(".remove");

//handles the changing of the sorting buttons
for (let filter of filters) {
  filter.addEventListener("click", (e) => {
    const activ = document.querySelector(".activ");
    activ.classList.remove("activ");
    e.target.classList.add("activ");
  });
}

//redirect all buttons to error page when clicked
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    window.location.href = "error.html";
  });
}

//get the blog data
async function getBlogData(path) {
  const response = await fetch(path);
  const data = await response.json();
  const { blogDetails } = data;
  return blogDetails;
}

//scroll the page back to top
function scrollToTop() {
  // Scroll the page to the top smoothly using the ScrollToOptions.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//render blog details to the page when clicked
function renderBlog(details) {
  let {
    authorName,
    authorImage,
    date,
    blogTopic,
    blogSubTitle,
    blogImage,
    blogSubTopic,
    blogBody1,
    blogBody2,
    bodyHighlight,
  } = details;
  for (let eventLink of eventLinks) {
    eventLink.addEventListener("click", () => {
      container.classList.add("fadeIn");
      const blogPost = document.createElement("div");
      blogPost.setAttribute("class", "blog_post");
      const blogElements = `
      <div class="news_author">
      <img src="${authorImage}" alt="author image" />
      <div class="author_details">
        <h3 class="fw-bold fs-100">${authorName}</h3>
        <p class="fs-100">${date}</p>
      </div>
      </div>
      <div class="blog_title">
        <h1 class="fs-primary-heading fw-bold">${blogTopic}</h1>
        <p>${blogSubTitle}</p>
      </div>
      <img src="${blogImage}" alt="blog image">
      <article class="center-text">
         <h2 class="fs-secondary fw-bold">${blogSubTopic}</h2>
         <p>${blogBody1}</p>
         <p>${blogBody2}</p>
         <p class="higlight"></p>
      </article>
      <article  class="center-text">
        <h3 class="fs-400 fw-bold">How do I know how secure is my wallet?</h3>
        <p>${blogBody1}</p>
        <p>${blogBody2}</p>
      </article>
      <img src="${blogImage}" alt="blog image">
      <article  class="center-text">
        <h3 class="fs-400 fw-bold">${blogSubTopic}</h3>
        <p>${blogBody1}</p>
        <p>${blogBody2}</p>
        <p class="highlight">${bodyHighlight}</p>
       </article>
      <article  class="center-text">
        <h3 class="fs-400 fw-bold">${blogSubTopic}</h3>
        <p>${blogBody1}</p>
        <p>${blogBody2}</p>
      </article>
      `;
      blogPost.innerHTML = blogElements;
      blog.replaceWith(blogPost);
      setTimeout(() => {
        container.classList.remove("fadeIn");
      }, 500);
      scrollToTop();
      removeElement();
    });
  }
}

//remove some element
function removeElement() {
  for (let element of elementToBeRemoved) {
    element.remove();
  }
}

const blogDetails = await getBlogData(BLOG_PATH);
renderBlog(blogDetails[0]);
console.log(blogDetails);
