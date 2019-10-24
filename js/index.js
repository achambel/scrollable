function scroll(element) {
  const options = { behavior: "smooth" };

  const reachBottom =
    element.scrollHeight - element.scrollTop === element.clientHeight;

  if (element.scrollTop === 0) {
    direction = "down";
  } else if (reachBottom) {
    direction = "up";
  }

  if (direction === "up") {
    options.top = element.scrollTop - 5;
  } else {
    options.top = element.scrollTop + 5;
  }

  element.scrollTo(options);
}

const content = document.querySelector(".scroll-content");

setInterval(() => scroll(content), 150);
