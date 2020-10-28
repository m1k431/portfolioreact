import $ from 'jquery'

(() => {
    document.addEventListener('DOMContentLoaded', function () {
        window.document.getElementById('french').onclick = () => {
            $('.english').hide()
            $('.french').hide()
            $('#competen').css('height', 'auto')
            $('.french').fadeIn()
        }
        window.document.getElementById('english').onclick = () => {
            $('.french').hide()
            $('.english').hide()
            $('.english').fadeIn()
        }
    })
})()