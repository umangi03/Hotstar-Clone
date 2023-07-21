const carousel=document.querySelector('.carousel');
let sliders=[];

let slideindex=0;

const createSlide=() =>{
    if(slideindex>=movies.length)
    {
        slideindex=0;
    }
 // creating
    let slide=document.createElement('div');
    let img=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
// attaching
    img.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderindex].name));
    p.appendChild(document.createTextNode(movies[sliderindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(img);
    carousel.appendChild(slide);
// settiing up an image
    img.src=movies[slideindex].image;
    slideindex++;
//setting up elements classname
    slide.className='slider';
    content.className='slidecontent';
    h1.className='title';
    p.className='des';

    sliders.push(slide);
}

createSlide();