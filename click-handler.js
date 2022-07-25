document.addEventListener(`click`, e => {
    const origin = e.target.closest(`a`);
    var targetUrl = new URL(origin.href)
    if (origin && location.hostname != targetUrl.hostname) {
        $.getJSON("https://api.ipify.org?format=json", function(data) {
            const ip = data.ip
        })
        alert(ip)
        $.ajax({
            type: "POST",
            url: "https://select-software-reviews.bubbleapps.io/version-live/api/1.1/wf/trackclicks",
            data: JSON.stringify({ "url": origin.href, "ip": ip }),
            crossDomain: true,
            contentType: "application/json",
            success: function (result) {
                console.log(result);
            },
            error: function (result, status) {
                alert(result)
            }
        });
    }
});
