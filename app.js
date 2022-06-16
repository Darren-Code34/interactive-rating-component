const ratingComponent = document.querySelector('.rating-component');
const feedbackComponent = document.querySelector('.feedback-component');
const rates = document.querySelectorAll('.rate');
const rateFeedback = document.querySelector('.rate-feedback');
const submit = document.querySelector('.submit');





//have only one rate selected

rates.forEach(rate =>{
    rate.addEventListener('click', () =>{
        rates.forEach(item =>{
            item.classList.remove('selected');
        })

        rate.classList.add('selected')
    })
})


// submit the rate and display thank you

submit.addEventListener('click' ,() =>{
    
    const currentRate = document.querySelector('.selected');

    if (currentRate){
        ratingComponent.style.display = "none";
        feedbackComponent.style.display = "flex";
        rateFeedback.textContent = `You selected ${currentRate.textContent} out of 5`;
    }
})