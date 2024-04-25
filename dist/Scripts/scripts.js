const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],

  
    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],           
    [{ 'direction': 'rtl' }],                          
  
    [{ 'size': ['small', false, 'large', 'huge'] }],   
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],           
    [{ 'align': [] }],
  
                                            
  ];

const quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });

document.getElementById('save').addEventListener('click', function () {
    var editorContent = quill.root.innerHTML;
    const doc = new jsPDF();
    doc.fromHTML(editorContent, 10, 10, {
        'width': 185,
        'elementHandlers': this.specialElementHandlers
    });
    doc.save("TXTtoPDF.pdf");
})