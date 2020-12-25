var quote     = document.querySelector('.quote');
var root      = document.querySelector('.root');
var container = document.querySelector('.container');

var checkBoxTime = document.querySelector('.checkBoxTime');
var numTime      = document.querySelector('.numTime');

var langAr = document.getElementById('langAr');
var langEn = document.getElementById('langEn')

var settingsBtn = document.getElementById('settingsBtn');
var settingsOverlay = document.querySelector('.settings-overlay');
var settingsClose = document.getElementById('settingsClose');

var refreshBtn = document.getElementById('refreshBtn');

var shareBtn = document.getElementById('shareBtn');
var shareOverlay = document.querySelector('.share-overlay');
var shareClose = document.getElementById('shareClose');

var random    = Math.floor(Math.random() * 1643);


var photos = [
    'https://images.unsplash.com/photo-1519077843978-bef162652275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1509526756864-498e4cd78312?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1440339832528-9cdcdf01192b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1598644656788-c77be17dfc56?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1604766664165-668315c14b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1604598879256-c5d52ab56b8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1605474405960-7487e70c86a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1606145573422-4143383ee7a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1494500644332-c80032563e18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1504212186581-6c17d2cb280e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1496129050252-9b5f0f9aad16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1482129111037-35c9ce2b7a48?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1',
    'https://images.unsplash.com/photo-1501565402837-bf8feb84b780?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w='+ screen.width +'&dpr=1'
]

var randomPhoto = photos[Math.floor(Math.random() * photos.length)];

root.style.background = '#036297 url('+ randomPhoto +') no-repeat  50% 50%'
root.style.backgroundSize = 'cover'

/////////////////////////////////////

var getQuoteLang = localStorage.getItem('lang')
var setQuoteLang = localStorage.setItem('lang', getQuoteLang);

var getWaitTime  = localStorage.getItem('waitTime')
var setWaitTime  = localStorage.setItem('waitTime', getWaitTime);


if(getQuoteLang == 'ar') {
    activeChoise(langAr, langEn)
    fetch('files/quotes-ar.json')
        .then(res => res.json())
        .then((data) => {
            
            container.style.direction = "rtl";
            
            if(data[random].author != null)
            {
                quote.innerHTML = '<div class="content">'+ data[random].text +'</div> <div class="author">'+ data[random].author +'</div>';
            }else{
                quote.innerHTML = '<div class="content">'+ data[random].text +'</div>';
            }
            

            //Get Arabic File
            function getQoute(){
                if(data[random].author != null)
                {
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div> <div class="author">'+ data[random].author +'</div>';
                }else{
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div>';
                }
                random = Math.floor(Math.random() * 1643);
            }

            

            //setInterval(getQoute)
            refreshBtn.addEventListener('click', ()=>{
                getQoute()
            })
            
            

    })

}else if(getQuoteLang == 'en') {
    activeChoise(langEn, langAr)
    fetch('files/quotes.json')
        .then(res => res.json())
        .then((data) => {
            
            container.style.direction = "ltr";

            if(data[random].author != null)
            {
                quote.innerHTML = '<div class="content">'+ data[random].text +'</div> <div class="author">'+ data[random].author +'</div>';
            }else{
                quote.innerHTML = '<div class="content">'+ data[random].text +'</div>';
            }
            

            //Get English File
            function getQoute(){
                if(data[random].author != null)
                {
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div> <div class="author">'+ data[random].author +'</div>';
                }else{
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div>';
                }
                random = Math.floor(Math.random() * 1643);
            }

            

            //setInterval(getQoute)
            refreshBtn.addEventListener('click', ()=>{
                getQoute()
            })
            
                        
                    
    })

}else{
    localStorage.setItem('lang', 'en');
}


/////////////////////////

/*
numTime.value = localStorage.getItem('waitTime');

checkBoxTime.addEventListener('change', ()=>{
    if(checkBoxTime.checked)
    {
        numTime.disabled = false;

        numTime.addEventListener('change', ()=>{
            localStorage.setItem('waitTime', numTime.value);
        })

    }else{
        numTime.disabled = true;
        localStorage.setItem('waitTime', null);
    }
    
})
*/

////////////////////////////

langAr.addEventListener('click', ()=>{
    setLangAr()
})

langEn.addEventListener('click', ()=>{
    setLangEn()
})

function setLangAr(){
    localStorage.setItem('lang', 'ar');
    activeChoise(langAr, langEn)
    location.reload();
}

function setLangEn(){
    localStorage.setItem('lang', 'en');
    activeChoise(langEn, langAr)
    location.reload();
}

function activeChoise(active, disactive){
    active.classList.add('active')
    disactive.classList.remove('active')
}

///////////////////////

settingsBtn.addEventListener('click', ()=>{
    settingsOverlay.classList.add('settings-active')
})

settingsClose.addEventListener('click', ()=>{
    settingsOverlay.classList.remove('settings-active')
    
})

///////////////////

shareBtn.addEventListener('click', ()=>{
    shareOverlay.classList.add('share-active')
})

shareClose.addEventListener('click', ()=>{
    shareOverlay.classList.remove('share-active')
    
})

/////////////////





/*
$(document).ready(function () {
    


    if(getQuoteLang == 'ar')
    {

        //Get Arabic File
        $.getJSON("files/quotes-ar.json",
            function (data) {
                console.log(data);

                if(data[random].author != null)
                {
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div> <div class="author">'+ data[random].author +'</div>';
                }else{
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div>';
                }
                
            }
        );
    }
    if(getQuoteLang == 'en') {
         //Get English File
         $.getJSON("files/quotes.json",
            function (data) {
                
                console.log(data);

                if(data[random].author != null)
                {
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div> <div class="author">'+ data[random].author +'</div>';
                }else{
                    quote.innerHTML = '<div class="content">'+ data[random].text +'</div>';
                }
                
            }
        );
    }
    if(setQuoteLang = null){
        localStorage.setItem('lang', 'en');
    }
       
    

    


    $.get("https://api.unsplash.com/photos/random/?query=nature&orientation=landscape&client_id=jU9sbZ2C-79TQ2W9ZCXx6hkrtfawPs8tUUiJpGoQpPg&count=1&collections/319663/nature",
        function (data) {
            
            root.style.background = 'url('+ data[0].urls.regular +')';
        }
    );
});*/