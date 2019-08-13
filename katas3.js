const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function oneThroughTwenty() {
    let text = document.createTextNode(" 1 - 20: ");
    document.getElementById("Row1").appendChild(text);

    for(let i = 1; i < 21; i ++) {
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("Row1").appendChild(numbers);
    }
} 

function evensThroughTwenty() {
    let text = document.createTextNode(" 1 - 20 evens: ");
    document.getElementById("Row2").appendChild(text);

    for(let i = 2; i < 21; i += 2) {
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("Row2").appendChild(numbers);
    }
}

function oddsThroughTwenty() {
    let text = document.createTextNode("1 - 20 odds: ");
    document.getElementById("Row3").appendChild(text);

    for(let i = 1; i < 21; i += 2) {
        let numbers = document.createTextNode(i + ", "); 
        document.getElementById("Row3").appendChild(numbers);
    }
}

function multiplesOfFive() {
    let text = document.createTextNode("5 - 100 multiples of five: ");
    document.getElementById("Row4").appendChild(text);

    for(let i = 5; i < 101; i += 5) {
        let numbers = document.createTextNode( i + ", ");
        document.getElementById("Row4").appendChild(numbers);
    }
}

function squareNumbers() {
    let text = document.createTextNode("1 - 100 square numbers: ");
    document.getElementById("Row5").appendChild(text);

    for(i = 1; i <= 10; i ++) {
        let numbers = document.createTextNode((i * i) + ", ");
        document.getElementById("Row5").appendChild(numbers);
    }
}

function countingBackwards() {
    let text = document.createTextNode("20 - 1 counting backwards: ")
    document.getElementById("Row6").appendChild(text);

    for(let i = 20; i >= 1; i --) {
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("Row6").appendChild(numbers);
    }
}

function evensBackwards() {
    let text = document.createTextNode("20 - 1 evens backwards: ");
    document.getElementById("Row7").appendChild(text);

    for(let i = 20; i >= 1; i-= 2) {
        let numbers = document.createTextNode(i + ", ")
        document.getElementById("Row7").appendChild(numbers);
    }

}

function oddsBackwards() {
    let text = document.createTextNode("20 - 1 odds backwards: ");
    document.getElementById("Row8").appendChild(text);

    for(let i = 19; i >= 1; i-= 2) {
        let numbers = document.createTextNode(i + ", ")
        document.getElementById("Row8").appendChild(numbers);
    }
}

function multiplesOfFiveBackwards() {
    let text = document.createTextNode("100 - 5 multiples of five Backwards: ");
    document.getElementById("Row9").appendChild(text);

    for(let i = 100; i >= 1; i -= 5) {
        let numbers = document.createTextNode(i + ", ")
        document.getElementById("Row9").appendChild(numbers);
    }
}

function squareNumbersBackwards() {
    let text = document.createTextNode("100 - 1 square numbers backwards: ");
    document.getElementById("Row10").appendChild(text);

    for(let i = 10; i >= 1; i--) {
        let numbers = document.createTextNode((i*i) + ", ")
        document.getElementById("Row10").appendChild(numbers);
    }
}

function displaySampleArray(){
    let text = document.createTextNode("Sample Array : ");
    document.getElementById("Row11").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        let numbers = document.createTextNode(sampleArray[i] + ", ");
        document.getElementById("Row11").appendChild(numbers);
    }
}
function displayEvens(){
    let text = document.createTextNode("Sample Array Evens : ");
    document.getElementById("Row12").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] % 2 != 0)
            continue;
        let numbers = document.createTextNode(sampleArray[i] + ", ");
        document.getElementById("Row12").appendChild(numbers);
    }
}
function displayOdds(){
    let text = document.createTextNode("Sample Array Odds : ");
    document.getElementById("Row13").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] % 2 != 1)
            continue;
        let numbers = document.createTextNode(sampleArray[i] + ", ");
        document.getElementById("Row13").appendChild(numbers);
    }
}
function displaySampleSqaured(){
    let text = document.createTextNode("Sample Array Squared : ");
    document.getElementById("Row14").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        let numbers = document.createTextNode((sampleArray[i] * sampleArray[i]) + ", ");
        document.getElementById("Row14").appendChild(numbers);
    }
}
function displaySum20(){
    let text = document.createTextNode("Sum of 1 - 20 : ");
    document.getElementById("Row15").appendChild(text);  
    let num = 0;
    for(let i = 0; i < 21; i ++){
        num += i;
    }
    let numbers = document.createTextNode(num);
    document.getElementById("Row15").appendChild(numbers);
}
function displaySampleSum(){
    let text = document.createTextNode("Sum of Sample Array : ");
    document.getElementById("Row16").appendChild(text);  
    let num = 0;
    for(let i = 0; i < sampleArray.length; i ++){
        num += sampleArray[i];
    }
    let numbers = document.createTextNode(num);
    document.getElementById("Row16").appendChild(numbers);
}
function displaySmallest(){
    let text = document.createTextNode("Sample Array Smallest : ");
    document.getElementById("Row17").appendChild(text);  
    let smallest = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] < smallest)
            smallest = sampleArray[i];
    }
    let numbers = document.createTextNode(smallest);
    document.getElementById("Row17").appendChild(numbers);
}
function displayLargest(){
    let text = document.createTextNode("Sample Array Largest : ");
    document.getElementById("Row18").appendChild(text);  
    let largest = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] > largest)
            largest = sampleArray[i];
    }
    let numbers = document.createTextNode(largest);
    document.getElementById("Row18").appendChild(numbers);
}
function display20Rectangles(){
    let text = document.createTextNode("20 Even Rectangles");
    document.getElementById("Row19").appendChild(text); 
    for(let i = 0; i < 20; i ++){
        let rect = document.createElement("DIV");
        rect.style = "width:100px;height:20px;border:1px solid #000;background-color:gray"
        document.getElementById("Row19").appendChild(rect);
    }
}
function display20DiffRectangles(){
    let text = document.createTextNode("20 Evenly Expanding Rectangles");
    document.getElementById("Row20").appendChild(text); 
    for(let i = 105; i < 201; i += 5){
        let rect = document.createElement("DIV");
        rect.style = "width:" + i + "px;height:20px;border:1px solid #000;background-color:gray"
        document.getElementById("Row20").appendChild(rect);
    }
}
function displaySampleRectangles(){
    let text = document.createTextNode("Rectangles With Widths of Sample Array");
    document.getElementById("Row21").appendChild(text); 
    for(let i = 0; i < sampleArray.length; i ++){
        let rect = document.createElement("DIV");
        rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:gray"
        document.getElementById("Row21").appendChild(rect);
    }
}
function displayEveryOtherRed(){
    let text = document.createTextNode("Every Other Rectangle is Red");
    document.getElementById("Row22").appendChild(text); 
    for(let i = 0; i < sampleArray.length; i ++){
        let rect = document.createElement("DIV");
        if(i % 2 == 0)
            rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:gray"
        else if(i % 2 == 1)
            rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:red"
        document.getElementById("Row22").appendChild(rect);
    }
}
function displayRedWidths(){
    let text = document.createTextNode("Even Widths are Red");
    document.getElementById("Row23").appendChild(text); 
    for(let i = 0; i < sampleArray.length; i ++){
        let rect = document.createElement("DIV");
        rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:gray"
        if(sampleArray[i] % 2 == 0)
            rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:red"
        document.getElementById("Row23").appendChild(rect);
    }
}