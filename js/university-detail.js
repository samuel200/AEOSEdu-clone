$(document).on("DOMContentLoaded", ()=>{

    // universty description expansion and reduction logic
    const content = "Founders of the university, alumnus and gold medalist from IIT Kanpur, envision Shri Ramswaroop Memorial University being a world class University by achieving excellence in the fields of Education, Research & Consultancy, through socially enriching and ethically responsible pursuits. The phenomenal journey of the group dates back to 1999. With just 22 students and an unwavering commitment to quality education, led to birth of SRMU. SRMU is a confluence of academic, cultural and intellectual resources. SRMU seeks to achieve the highest leveels of distinction in the innovation and transmission of knowledge and understanding. 9 institutes offering a wide spectrum of choice for the students to choose undergraduate, post graduate and Doctoral programs in Engineering (Mechanical, Civil, Electrical, Electronics & Communication, Computer Science),Bio-Technology & Bio-Sciences, Management, Commerce, Economics & Computer Applications, Journalism & Mass Communication, Legal studies, Basic Sciences and Humanities, Education & Research. SRMU takes pride in its excellent faculty, which is from leading Central Universities and premier institutes like IIT and IIM etc. Constant interface with industry stalwarts and a compassionate management leads to innovative pedagogy and revision of the syllabus, making the courses relevant and employment enhancing. SRMU although a young trust, has made significant breakthrough in patents and government sponsored projects. Serene and beautiful ambience of the University is conducive for quality education. The students are encouraged to be a part to the various co-curricular activities and events of the University. Keeping the overall development in mind, the University provides various assistive programs for its students so that the student can get good placements. University outreach involves CSR projects like Apni Pathshala, a free education system for the underprivileged children, National Social Service (NSS) and Scholarships for deserving students. SRMU’s bold vision is built upon over a decade of excellence of SRMGPC in engineering and business education. It took 18 years of dedicated and untiring efforts to emerge as a university of repute. With motto Chase Reality…Dreams Will Follow , SRMU is all set to create a benchmark in the education system"
    let status = false;
    $("#content-holder").text(content.substring(0, 300)+"...")
    $("#more").on("click", e =>{
        e.preventDefault();
        if(!status){
            $("#content-holder").text(content);
            $(e.target).text("less");
        }else{
            $("#content-holder").text(content.substring(0, 300)+"...")
            $(e.target).text("more");
        }
        status = !status;
    })

    // initializing modal
    $(document).ready(function(){
        $('.modal').modal();
    });

    // tab exchange logic
    let activeTab = $(".tab-header .active");
    const tabs = $(".tab-header a");

    $(activeTab.attr("href")).css({display: "block"})

    tabs.on("click", e =>{
        e.preventDefault();
        let activeElement = $(activeTab.attr("href"))
        activeTab.removeClass("active");
        activeTab = $(e.target);
        activeTab.addClass("active");

        activeElement.animate({
            opacity: 0
        }, 500, ()=>{
            activeElement.css({display: "none"});
            activeElement = $(activeTab.attr("href"));
            activeElement.css({display: "block"}).animate({opacity: 1}, 500)
        })
    })
})