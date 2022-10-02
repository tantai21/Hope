let items = document.querySelectorAll('.item')
document.addEventListener('scroll', (event) => {
    items.forEach(item => {
        if (item.offsetTop - window.scrollY < 700) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active')
        }
    })
})

console.log(content);
