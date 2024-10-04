let ourText = document.getElementById("our-text");

ourText.addEventListener('input', function(){
    let words = document.getElementById("words");
    let sentences = document.getElementById("sentences")
    let characters = document.getElementById("characters")

    let textValue = ourText.value;

    // Total Words
    let totalWords = textValue.split(' ').length-1 || 0;
    console.log(totalWords);
    words.innerHTML = totalWords

    // Total Sentence
    // let totalSentences = textValue.match(/[^\.!\?]+[\.!\?]+/g);
    let totalSentences = textValue.split('.').length-1 || 0;
    console.log(totalSentences);
    sentences.innerHTML = totalSentences;

    // Total charactors
    let totalChars = textValue.length;
    console.log(totalChars);
    characters.innerHTML = totalChars;

    
})