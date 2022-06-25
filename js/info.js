document.querySelectorAll(".tabBar")[0].addEventListener("click", function(e) {
    tabBtn(e.target.dataset.id);
});

function tabBtn(a) {
    document.querySelectorAll(".tab")[a].addEventListener("click", function() {
        for (
            let i = 0; i < document.querySelectorAll(".tab").length; i++
        ) {
            document.querySelectorAll(".tab")[i].classList.remove("here");
            document.querySelectorAll(".page")[i].classList.remove("show");
        }

        document.querySelectorAll(".tab")[a].classList.add("here");
        document.querySelectorAll(".page")[a].classList.add("show");
    })
};