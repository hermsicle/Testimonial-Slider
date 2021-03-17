// const prevBtn = document.getElementById('prev-btn')
// const nextBtn = document.getElementById('next-btn')

let userImage = document.getElementById('user-image')
let userTestimonial = document.getElementById('testimonial')
let userName = document.getElementById('name')
let userRole = document.getElementById('role')
let btns = document.querySelectorAll('.btns')
let contentContainer = document.querySelector('.card-content')

let position = 0

let tanya = {
    img: './assets/images/image-tanya.jpg',
    testimonial: `
    “ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”
    `,
    name: 'Tanya Sinclair',
    role: 'UX Engineer'
}

let john = {
    img: './assets/images/image-john.jpg',
    testimonial: `
    “ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”
    `,
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer'
}

for(let i = 0; i < btns.length; i ++) {
    btns[i].addEventListener('click', () => {
        position++
        switch(position) {
            case 1: 
                userImage.src = john.img
                userImage.style.animation = 'moveimg linear 500ms'
                contentContainer.style.animation = 'movetext linear 500ms'
                userTestimonial.textContent = john.testimonial
                userName.textContent = john.name
                userRole.textContent = john.role
                isTanya = false
                isJohn = true   
                break
            case 2:
                userImage.src = tanya.img
                userTestimonial.textContent = tanya.testimonial
                userName.textContent = tanya.name
                userRole.textContent = tanya.role
                isJohn = false
                isTanya = true
                break
        }
        if(position == 2) {
            position = 0
            userImage.style.animation = 'moveimg2 linear 500ms'
            contentContainer.style.animation = 'movetext2 linear 500ms'
        }
    })
}

