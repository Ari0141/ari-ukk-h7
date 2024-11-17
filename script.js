document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll(this.getArrtributte('href')).scrollintoview({
            behavior: 'smooth'
        })
    })
})