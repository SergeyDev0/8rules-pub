document.addEventListener("DOMContentLoaded", () => {
  // DOM готов к взаимодейтсвию

  const onScrollHeader = () => {
    const header = document.querySelector("header");
    let prevScroll = window.pageYOffset;
    let currentScroll;
    window.addEventListener("scroll", () => {
      currentScroll = window.pageYOffset;
      const headerHidden = () => header.classList.contains("hide");
      if (currentScroll > prevScroll && !headerHidden()) {
        header.classList.add("hide");
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove("hide");
      }
      prevScroll = currentScroll;
    });
  };
  onScrollHeader();
});
