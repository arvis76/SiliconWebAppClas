
document.addEventListener('DOMContentLoaded', function () {
    handleProfileImageUpload()

})  

function handleProfileImageUpload() {

    try {

        let imageUploader = document.querySelector('#imageUploader')
        if (imageUploader != undefined) {
           
            imageUploader.addEventListener('change', function () {

                if (this.files.lenght != 0)
                   this.form.submit()
                
            })

        }
    }

    catch { }
}