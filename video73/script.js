function createCard(title, cName, views, monthsOld, duration, thumbnail){
    document.querySelector(".vidtitle").innerHTML = title
    document.querySelector(".channelname").innerHTML = cName

    if (views >= 1_000_000) {
    document.querySelector(".views").innerHTML =
        (views / 1_000_000).toFixed(1) + "M views";
}
else if (views >= 1_000) {
    document.querySelector(".views").innerHTML =
        Math.floor(views / 1_000) + "K views";
}
else {
    document.querySelector(".views").innerHTML = views + " views";
}


    document.querySelector(".monthsold").innerHTML = monthsOld + " months ago"
    document.querySelector(".length").innerHTML = duration
    document.querySelector(".thumbnail").src = thumbnail


}
let ffu =  document.querySelector(".vidtitle")
console.log(ffu)
createCard("What I Learnt Before College | Skills I Learnt In 12th Holidays", "Adithya and his Career", 4300000, 1, "04:45", "https://i.ytimg.com/vi/lDDh6xq5wow/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBoF17xmqhEYDTvV9yGMgqQR1mPnQ")