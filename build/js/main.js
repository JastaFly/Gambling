$(document).ready(function () {
    tableInfo()
    share()
})

let tableInfo = function () {
    let elem = document.getElementsByClassName('info__value')
    let gamers = randomDigital(100, 9999)
    let tables = randomDigital(50, 800)
    elem[0].innerHTML = gamers
    elem[1].innerHTML = tables
}

function randomDigital(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
}
function share() {
    let title = encodeURI(document.title)
    let url = encodeURI(document.location.href)
    let elem = document.getElementsByClassName('social-networks__item')
    elem[0].setAttribute('href', `https://vk.com/share.php?url=${url}&tltl=${title}&cmg=1`)
    elem[1].setAttribute('href', `https://t.me/share/url?url=${url}&text=${title}`)
    elem[2].setAttribute('href', `https://connect.ok.ru/offer?url=${url}&title=${title}`)
    elem[3].setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`)
    elem[4].setAttribute('href', `https://twitter.com/intent/tweet?original_referer=${url}&ref_src=twsrc%5Etfw&text=${title}&tw_p=tweetbutton&url=${url}`)
    console.log(title, url)
}







