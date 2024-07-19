const faqs = document.querySelectorAll(".faqs");
const faqans = document.querySelectorAll(".faq-answers");
const info = document.querySelectorAll(".plus");
const hide = document.querySelectorAll(".minus");

faqs.forEach((faq,i) => {
    faq.addEventListener('click',()=>{
        faqans.forEach((faqan,n)=>{
            if(n === i){
                faqan.classList.toggle('none');
                if(faqan.classList.contains('none')){
                    info[n].classList.remove('none');
                    hide[n].classList.remove('inline');
                    info[n].classList.add('inline');
                    hide[n].classList.add('none');
                } else {
                    info[n].classList.remove('inline');
                    hide[n].classList.remove('none');
                    info[n].classList.add('none');
                    hide[n].classList.add('inline');
                }
            } else {
                faqan.classList.add('none');
                info[n].classList.remove('none');
                hide[n].classList.remove('inline');
                info[n].classList.add('inline');
                hide[n].classList.add('none');
            }
        })
    })
})




