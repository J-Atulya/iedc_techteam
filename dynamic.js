const sections = document.querySelectorAll('.section');
// selects all elements in the section class
const sectBtns = document.querySelectorAll('.controlls');
// all buttons
const sectBtn = document.querySelectorAll('.control');
// active btn
const allSelect = document.querySelectorAll('.main-cont');
// full body content

function pageTrans()
{
    for(let i=0; i<sectBtn.length; i++)
    {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn1');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn1', '');
            this.className += 'active-btn1';
        })
    }
}
/* 
  for loop access any element in the sectBtn
  when a button is clicked, an event listener is added and perfomrs the code
  the one with active-btn class is linked to currentBtn
  the active-btn class is removed from it by replacing its name with ''
  then to the clicked button, name of 'active-btn' class is added
*/

pageTrans();
