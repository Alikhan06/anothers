const $getPostsBtn = document.querySelector('.getPostsBtn')
const $getCommentBtn = document.querySelector('.getCommentsBtn')
const $getAlbumBtn = document.querySelector('.getAlbumsBtn')
const $getPhotoBtn = document.querySelector('.getPhotosBtn')
const $getTodoBtn = document.querySelector('.getTodosBtn')
const $getUserBtn = document.querySelector('.getUsersBtn')
const $container = document.querySelector('.cardContainer')

const getPosts = sb =>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET' ,'https://jsonplaceholder.typicode.com/posts')
    xhr.addEventListener('load',() =>{
        console.log(xhr.response);
        const response = JSON.parse(xhr.response)
        sb(response)
    })
    xhr.addEventListener('error',err =>{
        console.log('Что-то пошло не так!!');
        console.log(err);
    })
    xhr.send()
}

window.addEventListener('load', () =>{
    getPosts(response => {
        console.log(response);
    })
})

$getPostsBtn.addEventListener('click',e =>{
    e.preventDefault();

    getPosts(response =>{
        const template = response.map(item => cardTemplate(item)).join('');
        $container.innerHTML = template;
    })
})

function cardTemplate({ title, body }){
    return `
        <div class="col-lg-3 p-4">
            <div class="row">
                <div class="card-header">
                    <h5>${title}</h5>
                </div>
                <div class="card-body">
                    <p>${body}</p>
                </div>
            </div>
        </div>    
    `
}



// getComment

const getComment = com =>{ 
    let comment = new XMLHttpRequest();
    comment.open('GET' ,'https://jsonplaceholder.typicode.com/comments')
    comment.addEventListener('load',() =>{
        console.log(comment.response);
        const response2 = JSON.parse(comment.response)
        com(response2)
    })
    comment.addEventListener('error',err =>{
        console.log('Что-то пошло не так!!');
        console.log(err);
    })
    comment.send()
}

window.addEventListener('load', () =>{
    getComment(response2 => {
        console.log(response2);
    })
})

$getCommentBtn.addEventListener('click',e =>{
    e.preventDefault();

    getComment(response2 =>{
        const template2 = response2.map(item => cardTemplate2(item)).join('');
        $container.innerHTML = template2;
    })
})

function cardTemplate2({ name, email, body }){
    return `
        <div class="col-lg-3 p-4">
            <div class="row text-center">
                <div class="card-header">
                    <h5>${name}</h5>
                </div>
                <div class="card-body">
                    <h6>${email}</h6>
                    <p>${body}</p>
                </div>
            </div>
        </div>    
    `
}








//   getAlbum

const getAlbum = com =>{
    let album = new XMLHttpRequest();
    album.open('GET' ,'https://jsonplaceholder.typicode.com/albums')
    album.addEventListener('load',() =>{
        console.log(album.response);
        const response3 = JSON.parse(album.response)
        com(response3)
    })
    album.addEventListener('error',err =>{
        console.log('Что-то пошло не так!!');
        console.log(err);
    })
    album.send()
}

window.addEventListener('load', () =>{
    getAlbum(response3 => {
        console.log(response3);
    })
})

$getAlbumBtn.addEventListener('click',e =>{
    e.preventDefault();

    getAlbum(response3 =>{
        const template3 = response3.map(item => cardTemplate3(item)).join('');
        $container.innerHTML = template3;
    })
})

function cardTemplate3({ title }){
    return `
        <div class="col-lg-2 p-3">
            <div class="row text-center">
                <div class="card-header">
                    <h5>${title}</h5>
                </div>
            </div>
        </div>    
    `
}




// getPhoto
const getPhoto = pho =>{
    let photo = new XMLHttpRequest();
    photo.open('GET','https://jsonplaceholder.typicode.com/photos')
    photo.addEventListener('load',() =>{
        console.log(photo.response);
        const response5 = JSON.parse(photo.response)
        pho(response5)
    })
    photo.addEventListener('error',err =>{
        console.log('Что-то пошло не так!!');
        console.log(err);
    })
    photo.send()
}

window.addEventListener('load', () =>{
    getPhoto(response5 => {
        console.log(response5);
    })
})

$getPhotoBtn.addEventListener('click',e =>{
    e.preventDefault();

    getPhoto(response5 =>{
        const template5 = response5.map(item => cardTemplate5(item)).join('');
        $container.innerHTML = template5;
    })
})

function cardTemplate5({ title,url }){
    return `
        <div class="card col-lg-2 mt-2 ml-3 mr-4" ">
            <img src="${url}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-text">${title}</h5>
            </div>
        </div>
    `
}


// getTodo

const getTodo = to =>{
    let todo = new XMLHttpRequest();
    todo.open('GET','https://jsonplaceholder.typicode.com/photos')
    todo.addEventListener('load',() =>{
        console.log(todo.response);
        const response6 = JSON.parse(todo.response)
        to(response6)
    })
    todo.addEventListener('error',err =>{
        console.log('Что-то пошло не так!!');
        console.log(err);
    })
    todo.send()
}
window.addEventListener('load', () =>{
    getTodo(response6 => {
        console.log(response6);
    })
})
$getTodoBtn.addEventListener('click',e =>{
    e.preventDefault();

    getTodo(response6 =>{
        const template6 = response6.map(item => cardTemplate6(item)).join('');
        $container.innerHTML = template6;
    })
})



function cardTemplate6({ title,completed }){
    return `
        <div class="col-lg-3 p-4">
            <div class="row text-center">
                <div class="card-header">
                    <h5>${title}</h5>
                </div>
                <div class="card-body">
                    <button  class="btn btn-primary lack">${completed}</button>
                </div>
            </div>
        </div>    
     `
}


//   getUser

const getUser = use =>{
    const  user = new XMLHttpRequest();
    user.open('GET' ,'https://jsonplaceholder.typicode.com/users')
    user.addEventListener('load',() =>{
        console.log(user.response);
        const response4 = JSON.parse(user.response)
        use(response4)
    })
    user.addEventListener('error',err =>{
        console.log('Что-то пошло не так!!');
        console.log(err);
    })
    user.send()
}

window.addEventListener('load', () =>{
    getUser(response4 => {
        console.log(response4);
    })
})

$getUserBtn.addEventListener('click',e =>{
    e.preventDefault();

    getUser(response4 =>{
        const template4 = response4.map(item => cardTemplate4(item)).join('');
        $container.innerHTML = template4;
    })
})

function cardTemplate4({ name,username,email,phone,website,address:{street,suite,city,zipcode,geo:{lat,lng}},company:{catchPhrase,bs}}){
    return `
        <div class="col-lg-3 p-4">
            <div class="row text-center">
                <div class="card-header">
                    <h3>${name}</h3>
                    <h3>Username: ${username}</h3>
                </div>
                <div class="card-body bg-info">
                    <h5>${email}</h5>
                    <p class="m-0"><b>Street:</b> ${street}</p>
                    <p class="m-0"><b>Suite:</b> ${suite}</p>
                    <p class="m-0"><b>City:</b> ${city}</p>
                    <p class="m-0"><b>Zipcode:</b> ${zipcode}</p>
                    <p class="m-0"><b>Geo:</b> ${lat}</p>
                    <p class="m-0"><b>Geo:</b> ${lng}</p>
                    <h6 class="m-2"><b>Phone:</b>>${phone}</h6>
                    <h6 class="m-2"><b>Website:</b>>${website}</h6>
                    <p class="m-0"><b>Company:</b> Alik</p>
                    <p class="m-0"><b>Company:</b> ${catchPhrase}</p>
                    <p class="m-0"><b>Company:</b> ${bs}</p>
                </div>
            </div>
        </div>    
    `
}



