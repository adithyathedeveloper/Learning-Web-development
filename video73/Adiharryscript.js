function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="container">
        <div class="inandonimage"><img class="thumbnail" src="${thumbnail}"
            alt="justworkingout">
        <div class="length">${duration}</div>
        </div>
        
        <div class="texters">
            <h2 class="vidtitle">${title}</h2>
            <div class="belowtitle">
                <p class="channelname">${cName}</p>
                <P>.</P>
                <P class="views">${viewStr} views</P>
                <p>.</p>
                <p class="monthsold">${monthsOld} months ago</p>
            </div>
        </div>
    </div>`

    document.querySelector(".card").innerHTML = document.querySelector(".card").innerHTML + html
}

createCard("What I Learnt Before College | Skills I Learnt In 12th Holidays", "Adithya and his Career", 4300000, 1, "04:45", "https://i.ytimg.com/vi/lDDh6xq5wow/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBoF17xmqhEYDTvV9yGMgqQR1mPnQ")
