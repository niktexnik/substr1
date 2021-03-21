window.onload = function () {
  function substr(str, start = 0, size = str.length){
    let result = [];
    let pos = start;
    if (start < 0) {
      pos = 0
    };
    if (size < 0) {
      size = 1
    };
    for (let i = 0; i < size; i++) {
      result.push(str.charAt(pos));
      pos++;
    };

    return result.join('');
  };

  let form = document.forms.my;
  let inputstr = document.getElementById("str");
  let inputstart = document.getElementById("start");
  let inputlength = document.getElementById("size");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form was submitted!");
    let str = inputstr.value;
    let size = inputlength.value;
    let start = inputstart.value;
    
    let result = substr(str, start, size);
    console.log('result :', result);
    document.querySelector('#resultSpan').innerHTML = result;
  });
}