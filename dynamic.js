const sections = document.querySelectorAll('.section');
// selects all elements in the section class
const sectBtns = document.querySelectorAll('.controlls');
// all buttons
const sectBtn = document.querySelectorAll('.control');
// active btn
const allSection = document.querySelectorAll('.main-cont');
// full body content

function pageTrans()
{
    for(let i=0; i<sectBtn.length; i++)
    {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
        /* for loop access any element in the sectBtn
            when a button is clicked, an event listener is added and perfomrs the code
            the one with active-btn class is linked to currentBtn
            the active-btn class is removed from it by replacing its name with ''
            then to the clicked button, name of 'active-btn' class is added
        */
    }

    allSection[0].addEventListener('click', (e) => {
        const id = e.target.dataset.id; //targets the data-id of the clicked section
        if(id)
        {
            //remove selection from other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active');
            //hiding other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let ele = document.body;
        ele.classList.toggle('light-mode')
    })
}

pageTrans();