const contents = document.querySelectorAll('.content');

contents.forEach(content => {
    const question = content.querySelector('.question');
    const answer = content.querySelector('.answer');

    question.addEventListener('click', () => {
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = "0px";
        }
    });
});