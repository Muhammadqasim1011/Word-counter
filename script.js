let ourText = document.getElementById("our-text");
ourText.addEventListener('input', function () {
    let words = document.getElementById("words");
    let sentences = document.getElementById("sentences")
    let characters = document.getElementById("characters")
    let paragraph = document.getElementById("paragraph")

    let textValue = ourText.value;

    characters.innerHTML = textValue.length;

    words.innerHTML = textValue === '' ? 0 : (textValue.match(/\b\w+('\w+)?\b/g) || []).length;

    sentences.innerHTML = textValue.split(/[.!?]+/).length - 1 || 0;

    paragraph.innerHTML = textValue.split('\n').length - 1 || 0;


    let wordsArray = textValue.match(/\b\w+('\w+)?\b/g) || [];
    wordsArray = wordsArray.map(word => word.toLowerCase());
    let wordCount = {};

    console.log(wordsArray);
    console.log(wordCount);

    wordsArray.forEach(word => wordCount[word] = (wordCount[word] || 0) + 1);

    let topFiveWords = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    let topWordsDiv = document.getElementById("top-words-list");
    topWordsDiv.innerHTML = '';

    console.log(topFiveWords);
    

    topFiveWords.forEach(([word, count]) => {
        let li = document.createElement('li');
        li.textContent = `${word}: ${count}`;
        topWordsDiv.appendChild(li);
    });


})