var profilebtn = document.getElementById("user");
var contactbtn = document.getElementById("contact");
var downloadCVbtn = document.getElementById("download");
var barssmallbtn = document.getElementById("barssmall");
const sidebar = document.querySelector(".leftside");

function ShowContent(contentId, button) {
  const contents = document.querySelectorAll(".content");
  var buttons = document.querySelectorAll("nav.leftside div.info button");

  contents.forEach((c) => {
    c.style.display = "none";
  });

  buttons.forEach((b) => {
    b.style.color = "white";
  });

  const selectedContent = document.getElementById(contentId);
  const selectedButton = document.getElementById(button);

  if (selectedContent) {
    if (window.innerWidth <= 480) {
      sidebar.style.display = "none";
    }
    selectedContent.style.display = "flex";
  }

  if (selectedButton) {
    selectedButton.style.color = "rgb(82, 186, 130)";
  }
}

profilebtn.addEventListener("click", () => ShowContent("AboutMe", "user"));
contactbtn.addEventListener("click", () => ShowContent("ContactMe", "contact"));
downloadCVbtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://localhost:443/downloadcv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
barssmallbtn.addEventListener("click", () => {
  if (sidebar.style.display == "flex") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
  }
});

function CheckWindowWidth() {
  if (window.innerWidth > 480) {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}

CheckWindowWidth();
window.addEventListener("resize", CheckWindowWidth);
