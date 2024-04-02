const quill = new Quill('#editor', {
  theme: 'snow'
});

document.getElementById('save').addEventListener('click', function () {
  var editorContent = quill.root.innerHTML;
  console.log(editorContent);
});