console.log('hei verden!!')

// ///// Case 2 - Research ////
const interviews = document.querySelectorAll('.animation-subheading')

observerSubs = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-interview 0.3s ${entry.target.dataset.delay} forwards ease`
                observerSubs.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

interviews.forEach(interview => {
    observerSubs.observe(interview)
})
