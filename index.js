const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ogText;

function setup() {
    var fancyText = document.getElementById("fancyText");
    ogText = fancyText.textContent;

    fancyText.onclick = ev => {
        var pos = 0;
        var interval = setInterval(() => {
            var newString = ogText.substring(0, pos);
            for (var i = pos; i < ev.target.textContent.length; i++) {
                var letter = ev.target.textContent[i];
                if (letter === " ") {
                    newString += " ";
                    continue;
                }
                letter = alphabet[Math.floor(Math.random() * 26)];
                newString += letter
            }
            ev.target.textContent = newString;
            pos++;
            if (pos > ogText.length) {
                clearInterval(interval);
            }
        }, 70);
    }
}