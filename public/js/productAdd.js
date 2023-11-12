const imgMain = document.getElementById('imgMain');
const boxImagesPreview = document.getElementById('boxImagesPreview')
const inputImage = document.getElementById('image');
const inputImages = document.getElementById('images');


inputImage.addEventListener('change', (event) => {
    
    //console.log(event.target.files[0]);

    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => imgMain.src = reader.result
})

inputImages.addEventListener('chance', function (evento) {
    
    function readAndPreview(file) {
        let reader = new FileReader();
        boxImagesPreview.innerHTML = null;

        reader.readAsDataURL(file)

        reader.onload = () => {
            let image = new Image()
            image.height = 100
            image.src = this.result
            boxImagesPreview.appendChild(image)

        }
    }

   // [].forEach.call(this.files, readAndPreview)

    this.files.forEach(file => {
        readAndPreview(file)
    })
})