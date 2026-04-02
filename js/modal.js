const dialog = document.getElementById("create-post-dialog");

const openDialogDesktop = document.getElementById("open-create-post-desktop");
const openDialogMobile = document.getElementById("open-create-post");

openDialogDesktop.addEventListener("click", () => dialog.showModal());
openDialogMobile.addEventListener("click", () => dialog.showModal());

document
  .getElementById("close-dialog")
  .addEventListener("click", () => dialog.close());
document
  .getElementById("cancel-post")
  .addEventListener("click", () => dialog.close());
