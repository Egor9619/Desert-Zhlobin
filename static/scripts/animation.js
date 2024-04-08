function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show');
        } else{
        change.target.classList.remove('show');
        }
    });
}
let option = {threshold: [0.5] };
let observes = new IntersectionObserver(onEntry, option);
let elementor = document.querySelectorAll('.anim');
for (let elm of elementor){
    observes.observe(elm);
}