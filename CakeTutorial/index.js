//Ф-ция рандома
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

//Переменная для смены темы
let themeCount = getRandomIntInclusive(1, 3)
console.log(themeCount)

//Config 
const body = document.getElementById('body') //Body - элемент
const inlineStylesBody = body.style

const header = document.getElementById('header') //Header - элемент
const inlineStylesHeader = header.style

const footer = document.getElementById('footer') //Footer - элемент
const inlineStylesFooter = footer.style

const main = document.getElementById('main') //Main - элемент
const inlineStylesMain = main.style

// TEXT
const welcome = document.getElementById('welcome') //Label - элемент
const inlineStylesWelcome = welcome.style

const textHeader = document.getElementById('textHeader') //Текст header'а
const inlineStylesTextHeader = textHeader.style

const text = document.getElementById('text') //весь текст
const inlineStylesText = text.style

const textAnimed = document.getElementById('textAnimed') //H1 - элемент
const inlineStyleTextAnimed = textAnimed.style
// /TEXT

const logoHeaderImg = document.getElementById('logoHeaderImg') //img - элемент
const logoFooterImg = document.getElementById('logoFooterImg') //img - элемент

const footerLine = document.getElementById('footerLine') //Div - элемент
const inlineStylesFooterLine = footerLine.style

//LINK
const linkCss = document.getElementById('linkCss') //Link - элемент
const inlineLinkCss = linkCss.href

//First
const first = document.getElementById('first') //Div - элемент
const inlineStyleFirst = first.style

const second = document.getElementById('second') //Div - эдемент
const inlineStyleSecond = second.style

//Смена темы
if(themeCount == 1){

    linkCss.href = '/css/buttonStart-1.css'
    body.style.backgroundImage = 'url(/images/Background-light.jpg)'
    header.style.backgroundColor = 'var(--header-color-1)'
    logoHeaderImg.src = '/images/cake-dark.png'
    logoFooterImg.src = '/images/cake-dark.png'
    main.style.backgroundColor = 'var(--element-advanced-color-1)'
    first.style.backgroundColor = 'var(--element-advanced-color-1)'
    second.style.backgroundColor = 'var(--element-advanced-color-1)'
    //Text
    textHeader.style.color = 'var(--text-color-1)'
    text.style.color = 'var(--text-color-1)'
    welcome.style.color = 'var(--text-color-1)'
    textAnimed.style.color = 'var(--text-color-1)'
    // /Text
    footerLine.style.backgroundColor = 'var(--element-main-color-1)'
    footer.style.backgroundColor = 'var(--element-advanced-color-1)'

} else if(themeCount == 2){

    linkCss.href = '/css/buttonStart-2.css'
    body.style.backgroundImage = 'url(/images/Background-pink.jpg)'
    header.style.backgroundColor = 'var(--header-color-2)'
    logoHeaderImg.src = '/images/cake-dark.png'
    logoFooterImg.src = '/images/cake-dark.png'
    main.style.backgroundColor = 'var(--element-advanced-color-2)'
    first.style.backgroundColor = 'var(--element-advanced-color-2)'
    second.style.backgroundColor = 'var(--element-advanced-color-2)'
    //Text
    textHeader.style.color = 'var(--text-color-2)'
    text.style.color = 'var(--text-color-2)'
    welcome.style.color = 'var(--text-color-2)'
    textAnimed.style.color = 'var(--text-color-2)'
    // /Text
    footerLine.style.backgroundColor = 'var(--element-main-color-2)'
    footer.style.backgroundColor = 'var(--element-advanced-color-2)'

} else if(themeCount == 3){

    linkCss.href = '/css/buttonStart-3.css'
    body.style.backgroundImage = 'url(/images/Background-dark.jpg)'
    header.style.backgroundColor = 'var(--header-color-3)'
    logoHeaderImg.src = '/images/cake-light.png'
    logoFooterImg.src = '/images/cake-light.png'
    main.style.backgroundColor = 'var(--element-advanced-color-3)'
    first.style.backgroundColor = 'var(--element-advanced-color-3)'
    second.style.backgroundColor = 'var(--element-advanced-color-3)'
    //Text
    textHeader.style.color = 'var(--text-color-3)'
    text.style.color = 'var(--text-color-3)'
    welcome.style.color = 'var(--text-color-3)'
    textAnimed.style.color = 'var(--text-color-3)'
    // /Text
    footerLine.style.backgroundColor = 'var(--element-main-color-3)'
    footer.style.backgroundColor = 'var(--element-advanced-color-3)'

}