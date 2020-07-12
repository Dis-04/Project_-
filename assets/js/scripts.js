const div = document.createElement('div')
const img = document.createElement('img')
const h2 = document.createElement('h2')
const content = document.createElement('content')
const p = document.createElement('p')
const a = document.createElement('a')

div.appendChild(img)
div.appendChild(h2)
div.appendChild(content)
div.appendChild(p)
div.appendChild(a)

img.innerHTML = ''
h2.innerHTML = 'Распространенные заблуждения об уходе за кошкой'
content.innerHTML = 'Некоторых животных природа призывает делать очень странные вещи: есть колбасные шкурки, нитки из покрывала, варенье и прочие, часто…'
p.innerHTML = '9 февраля 2018'
a.innerHTML = 'Читать полностью'

div.classList.add('Post')
img.classList.add('Post__image')
h2.classList.add('Post__title')
content.classList.add('Post__descriptions')
div.classList.add('See__more')
p.classList.add('Post__date')
a.classList.add('Post__link')

img.src = 'assets/images/Post/place for photo.jpg'

a.href = '#'

document.body.appendChild(div)

console.log(div);
