document.getElementById('addmoney-section').style.display = 'block'
document.getElementById('cashout-section').style.display = "none"
document.getElementById('addmoney-box').addEventListener('click', function () {
    document.getElementById('addmoney-section').style.display = 'block'
    document.getElementById('cashout-section').style.display = "none"
})
document.getElementById('cashout-box').addEventListener('click', function () {

    document.getElementById('addmoney-section').style.display = 'none'
    document.getElementById('cashout-section').style.display = "block"
})
