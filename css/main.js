function paidMode() {
    // var myheader = document.getElementById('mainheader');
    // myheader.setAttribute('class','paidheader');
    // var h1 = myheader.getElementsByTagName('h1')[0];
    // h1.innerHTML = "M Company";

    var mainid =document.querySelectorAll('#maincon');
    for (let i = 0; i < mainid.length; i++) {
        mainid[i].setAttribute('class','customtarekbaiya');
        
    }
    var banner = document.getElementById('banner');
    banner.style.display ="none";
}