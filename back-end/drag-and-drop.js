const dropArea = document.getElementById('drop-aera');
const fileInput = document.getElementById('file-input');

function preventDefaults(e) {
    e.preventDefaults();
    e.stopPropagation();
}
dropArea.addEventListener('dragover', () => {
  dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('drag-over');
});

dropAera.addEventListener('drop', handleDrop);

function handleDrop(e) {/*...*/}