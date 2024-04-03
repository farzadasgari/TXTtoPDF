const quill = new Quill('#editor', {
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