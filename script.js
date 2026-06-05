document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("paFloatBtn");
    const popup = document.getElementById("paChatPopup");
    const closeBtn = document.getElementById("closeChat");
    const sendBtn = document.getElementById("paSend");

    // OPEN POPUP + SCROLL + HIGHLIGHT
    btn.addEventListener("click", function () {

        popup.style.display = "flex";

        document.getElementById("assistant").scrollIntoView({
            behavior: "smooth"
        });

        const box = document.querySelector("#assistant .content-limit");
        box.style.boxShadow = "0 0 25px rgba(212,175,55,0.6)";

        setTimeout(() => {
            box.style.boxShadow = "0 20px 50px rgba(0,0,0,0.45)";
        }, 1500);
    });

    // CLOSE POPUP
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // CHAT SEND
    sendBtn.addEventListener("click", function () {

        let input = document.getElementById("paInput");
        let text = input.value.trim();

        if (text !== "") {

            let userMsg = document.createElement("div");
            userMsg.style.textAlign = "right";
            userMsg.style.margin = "8px 0";
            userMsg.innerHTML = `
                <span style="background:#222;padding:8px 10px;border-radius:10px;display:inline-block;color:white;">
                    ${text}
                </span>
            `;

            document.getElementById("paBody").appendChild(userMsg);

            input.value = "";

            setTimeout(() => {
                let botMsg = document.createElement("div");
                botMsg.className = "bot-msg";
                botMsg.innerHTML = "🤖 Hello! I am Nir Personal Assistant. I am here to assist you.";

                document.getElementById("paBody").appendChild(botMsg);

                document.getElementById("paBody").scrollTop =
                    document.getElementById("paBody").scrollHeight;

            }, 600);
        }
    });

});




