// Only change code below this line
function urlSlug(title) {
  let arr = title.trim().toLowerCase().split(' ');
  console.log(arr);
  arr = arr.filter(el => {
      if (el) return el
  })
  console.log(arr);

  return arr.join('-');

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");