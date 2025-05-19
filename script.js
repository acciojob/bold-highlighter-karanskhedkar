function highlight() {
  //Write your code here
  const allStrongs = document.querySelectorAll("strong");
  console.log(allStrongs);
  allStrongs.forEach((ele) => {
    ele.style.color = "rgb(0, 128, 0)";
  });
}

function return_normal() {
  //Write your code here
  const allStrongs = document.querySelectorAll("strong");
  console.log(allStrongs);
  allStrongs.forEach((ele) => {
    ele.style.color = "rgb(0, 0, 0)";
  });
}
