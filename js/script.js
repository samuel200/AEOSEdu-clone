$(document).on("DOMContentLoaded", ()=>{

    $("#to-top").on("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            duration: 500
        })
    })

    // Slider Logic Start

    let count = 2;
    const img = $("#splash-screen").find("img");

    setInterval(()=>{
        if(count > 3){
            count = 1;
        }

        img.animate({opacity: .3}, 500, ()=>{
            img.attr("src", ("./img/banner-"+count+".jpg")).animate({opacity: 1}, 200);
            count++;
        })
    }, 8000);

    // Slider Login End


    // Education Institue Side Scroller Instantiation

    $(document).ready(function() {
        $("#light-slider").lightSlider({
            item: 3,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
            height: 800,

            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////

            speed: 400, //ms'
            auto: true,
            pauseOnHover: false,
            loop: true,
            slideEndAnimation: true,
            pause: 2000,

            keyPress: false,
            controls: false,
            rtl:false,
            adaptiveHeight: false,

            thumbItem:10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',

            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                      }
                }, 
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
        });
    });

    $("#splash-form").on("submit", e =>{
        e.preventDefault();
        if($(e.target).children("input").val() !== ""){
            window.location.href = "/search-uni.html"
        }
    })


    const uniCards= [
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/08193ff7af3bc2d8cfa4997a12f68323.jpeg", url: "/institutes/om-sterling-global-university", text: "Om Sterling Global University, OSGU ,Hisar (Haryana)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/610e33b91d301337a2102fd1b78adb1e.png", url: "/institutes/sandip-university-bihar", text: "Sandip University - Bihar, SU - Sijoul ,Madhubani (Bihar)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/a13b4d198a459893d428a205989cf560.png", url: "/institutes/sandip-university-maharashtra", text: "Sandip University - Maharashtra, SUN ,Nashik (Maharashtra)"}, 
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/625009bdad1fd74823b4872f6ba98405.PNG", url: "/institutes/vivekananda-global-university-jaipur", text: "VIVEKANANDA GLOBAL UNIVERSITY, JAIPUR, VGU, Jaipur ,Jaipur (Rajasthan)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/84154ef88e872a81441a5872f975553e.png", url: "/institutes/silver-oak-university", text: "Silver Oak University, SOU ,Ahmedabad (Gujarat)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/338b9702005f6d4db7ac6b17e1bc73b5.jpg", url: "/institutes/mats-university", text: "MATS University, MATSU ,Raipur (Chhattisgarh)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/c26d5b7330b29dbeb4ad2bce31bd60f9.png", url: "/institutes/himalayan-university", text: "Himalayan University, HU ,Itanagar (Arunachal Pradesh)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/d84edca06830a5310b56c0a7a86dba29.png", url: "/institutes/jaipur-national-university", text: "Jaipur National University, JNU ,Jaipur (Rajasthan)"},
        {img: "https://aeosedu.com/assets/uploads/institutes/profiles/fb90415a77fee29578d7cca5de6da2f1.png", url: "/institutes/lingaya-s-university-1", text: "Lingaya’s University, LU ,Faridabad (Haryana)"}]
        
    const cardHolder = $("#results");
    const search = $("#search-input");
    console.log(search)

    const renderCards = cardList =>{
        let bodyString = ""
        cardList.map(({img, url, text})=>{
            bodyString += `<div class="col l4 m6 s12 z-depth-1">
            <img src="./img/i2.png" alt="i">
            <a href="university-detail.html">${text}</a>
            <div><a href="#search" class="modal-trigger">Apply Now</a></div>
        </div>`
        })
        return bodyString;
    }
    cardHolder.html(renderCards(uniCards));
    
    search.on("keyup", e =>{
        const query = $(e.target).val();

        if(query === ""){
            cardHolder.html(renderCards(uniCards));
        }else{
            let newList = uniCards.filter(({text})=>text.includes(query))
            cardHolder.html(newList.length === 0 ? '<h2 class="not-found">No Result Found</h2>' : renderCards(newList))
        }
    })

    $(document).on('scroll', e=>{
        if($(document).scrollTop() > 100){
            $("#navigation").css({
                opacity: .9,
                position: "sticky",
                top: "0px",
                zIndex: 200
            })
        }
        else{
            $("#navigation").css({
                opacity: 1,
                position: "relative"
            })
        }
    })
})