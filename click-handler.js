document.addEventListener(`click`, e => {
    const origin = e.target.closest(`a`);
    const targetUrl = new URL(origin.href)
    if (origin && location.hostname != targetUrl.hostname) {
        $.ajax({
            type : "GET",
            url : "https://api.ipify.org?format=json",
            crossDomain: true,
            dataType: "jsonp",
            contentType: "application/json",
            success: function (result) {
                const data = JSON.parse(result);
                console.log(`IP: ${data.ip}`);
                alert(data.ip);
                eventClick(origin.href, data.ip)
            },
            error: function (result, status) {
                console.log(result);
                eventClick(origin.href, null)
            }
        });
    }
});

function eventClick(url, ip) {
    $.ajax({
        type: "POST",
        url: "https://select-software-reviews.bubbleapps.io/version-live/api/1.1/wf/trackclicks",
        data: JSON.stringify({ "url": url, "ip": ip }),
        crossDomain: true,
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            console.log(`Url: ${url}, IP: ${ip}`);
        },
        error: function (result, status) {
            console.log(result);
        }
    });
}
