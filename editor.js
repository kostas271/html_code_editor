var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var cons = document.getElementById("cons");
var code = document.getElementById("code").contentWindow.document;


function main() {

  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();

    console.log(cons.value);

    

    };
    
};
main();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

document.getElementById("dwn_btn").addEventListener("click", function()
{
  // Generate download of hello.txt file with some content
  var text = html.value +
  "<style>" +
  css.value +
  "</style>" +
  "<script>" +
  js.value +
  "</script>";
  var filename = "download.html";
  
  download(filename, text);}, false);


function erase() {
  document.getElementById("html").value = "";
  document.getElementById("css").value = "";
  document.getElementById("js").value = "";
  document.getElementById("console").value = "";
  }

  
  document.getElementById("delete_btn").addEventListener("click", function()
    {
      erase();
    }, false);

  document.getElementById("clone_btn").addEventListener("click", function()
  {  
    window.open("ergasia.html", "blank");
    }, false);
