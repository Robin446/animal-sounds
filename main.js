function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/71uT1BUiB/modal.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);



         img = document.getElementById('img');
        
        if(results[0].label == "bark") {
            img.src ='download.jpeg';
        }
        else if(results[0].label == "cat") {
            img.src ='cat.jpeg';
        }
        else if(results[0].label == "snake") {
            img.src ='snake.jpeg';
        }
        else {
            img.src ='birds.jpeg';
        }
    }
}