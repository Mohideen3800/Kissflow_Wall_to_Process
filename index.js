const lcnc = new LCNC();

function getProfileInfo() {
    lcnc.api("/id").then((res) => {
        console.info("API response is", res);
        document.getElementById("output").innerText = res.UserDetails.Name;
     });
}

window.onload = function onLoad() {
    if (!lcnc) {
        lcnc = new LCNC();
    }
    watchParam();
}

function watchParam() {
    lcnc.watchParams(function (data) {
        console.log("watch params data", data);
        document.getElementById("output").innerText = JSON.stringify(data);
    });
}