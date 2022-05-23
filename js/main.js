const elJsFormWrapper = document.querySelector('.js-form-url-wrapper');
const elJsUrlWrapperBlock = document.querySelector('.js-url-wrapper-block');
const elMoreLinks = document.querySelector('.more-links');
const elJsSmallButton = document.querySelectorAll('.js-small-button');

if (elJsUrlWrapperBlock) {
    elJsUrlWrapperBlock.addEventListener('submit', function (evt) {
        evt.preventDefault();
        elMoreLinks.classList.add('js-url-wrapper-block');
    });
}
console.log(elJsSmallButton);

elJsSmallButton.forEach(function(item){
    item.addEventListener('click' , function()
{
    item.textContent = 'Copied!'
    item.style.background = '#3A3054'
    navigator.clipboard.writeText(item.previousElementSibling.textContent)
}
)
})

