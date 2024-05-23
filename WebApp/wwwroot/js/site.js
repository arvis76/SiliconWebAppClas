document.addEventListener('DOMContentLoaded', function () {

    handleProfileImgUp()

})


function handleProfileImgUp() {

    try {
        let ProfileImg = document.getElementById('ProfileImg')

        if (ProfileImg != undefined) {

            ProfileImg.addEventListener('change', function () {

                if (this.file.lenght > 0)
                    this.form.submit
            })
        }
    }

    catch { }
}