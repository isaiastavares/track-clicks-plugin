document.addEventListener(`click`, e => {
    const origin = e.target.closest(`a`);
    var targetUrl = new URL(origin.href)
    if (origin && location.hostname != targetUrl.hostname) {
        $.ajax({
            type: "POST",
            url: "https://select-software-reviews.bubbleapps.io/version-live/api/1.1/wf/trackclicks",
            data: JSON.stringify({ "url": origin.href }),
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
