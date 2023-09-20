// Author Home - Share Link Interaction

//1. Get all active buttons
const buttonIDs = document.querySelectorAll("#btn-share");

//2. For each button
buttonIDs.forEach((buttonID) => {
  //2.1 Add `click` event listener
  buttonID.addEventListener("click", () => {
    //2.2 Check content of button
    if (buttonID.innerHTML === "SHARE") {
      //2.3 Get share box
      const shareBtn = buttonID.nextElementSibling.nextElementSibling;

      //2.4 Add `flex` class to hidden share box
      shareBtn.classList.add("flex");

      //2.5 Update content to `HIDE`
      buttonID.innerHTML = "HIDE";
    } else if (buttonID.innerHTML === "HIDE") {
      const shareBtn = buttonID.nextElementSibling.nextElementSibling;

      //2.6 If content = `HIDE` then remove `flex` class
      shareBtn.classList.remove("flex");

      //2.7 Update content to `SHARE`
      buttonID.innerHTML = "SHARE";
    }
  });
});
