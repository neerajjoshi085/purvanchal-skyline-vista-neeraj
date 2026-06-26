const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {

        // remove active from all
        tabs.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // add active to clicked
        btn.classList.add("active");

        // show related content
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

$(".reamoredbtn").click(function () {
    $(".moretext").slideToggle("slow");
    if ($(this).text() == "Read More") $(this).text("Read Less")
    else $(this).text("Read More");
});

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-content",
//     smooth: 3,
//     effects: true
// });


$('.gallery-sec .image-link, .floor-plan .image-link, .amenities-sec .image-link, footer .image-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});

$(window).ready(function () {
    setTimeout(function () {
        $('#exampleModal').modal("show")
    }, 5000)
});
