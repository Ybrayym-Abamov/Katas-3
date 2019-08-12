const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function oneThroughTwenty() {
    let text = document.createTextNode(" 1 - 20: ");
    document.getElementById("Row1").appendChild(text);

    for(let i = 1; i < 21; i ++) {
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("Row1").appendChild(numbers);
    }
} 
function oneThroughTwenty() {
    let text = document.createTextNode(" 1 - 20: ");
}
