// Free Qrcode Generator

function generateQR() {
    let qrInput = document.getElementById("input-qr");
    let canvas = document.getElementById("canvas-qr");

    QRCode.toCanvas(canvas, qrInput.value, function (error) {
        if (error) console.error(error);
    } );
}


// Back to previous page
const back = document.querySelector('.btn-back');

back.addEventListener('click', () => {
    window.history.back();
} );