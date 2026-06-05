document.getElementById("paFloatBtn").addEventListener("click", function () {
    // scroll to assistant section
    document.getElementById("assistant").scrollIntoView({
        behavior: "smooth"
    });

    // optional highlight effect
    const box = document.querySelector("#assistant .content-limit");
    box.style.boxShadow = "0 0 25px rgba(212,175,55,0.6)";

    setTimeout(() => {
        box.style.boxShadow = "0 20px 50px rgba(0,0,0,0.45)";
    }, 1500);
});
