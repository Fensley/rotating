
// const open = document.getElementById('open');
// const close = document.getElementById('close');
// const container = document.querySelector('.container');

// open.addEventListener('click', fensley());

// close.addEventListener('click',testing());


// function fensley() {

//   container.classList.add('show-nav');

// }

// function testing(){
//   container.classList.remove('show-nav');

// }


// this the second way i try it 
function clicking(){
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const container = document.querySelector('.container');


  open.addEventListener('click', 
  function fensley() {

    container.classList.add('show-nav');
  
  }
  );

  close.addEventListener('click',function testing(){
    container.classList.remove('show-nav');
  
  });
}
// call the clicking function.
clicking();
