// register form
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let acceptReceive = document.getElementById("box-1").checked
    let acceptPolicy = document.getElementById("box-2").checked

    let formFeedback = document.getElementById("form-feedback")
    let formFeedbackMessage = document.getElementById("form-feedback-message")
    let loader = document.getElementById("loader")
    let submitButton = document.getElementById("submit-button")

    let utm_id = document.getElementById("utm_id").value;
    let utm_source = document.getElementById("utm_source").value;
    let utm_medium = document.getElementById("utm_medium").value;
    let utm_campaign = document.getElementById("utm_campaign").value;
    let utm_term = document.getElementById("utm_term").value;
    let utm_content = document.getElementById("utm_content").value;

    //resetting form state
    formFeedback.style.display = "none";
    formFeedbackMessage.innerText = "";


    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || email === "") {
        formFeedback.style.display = "block";
        formFeedbackMessage.innerText = "Eposta alanı boş olamaz!"
        return;
    }
    if (!validEmailRegex.test(email)) {
        formFeedback.style.display = "block";
        formFeedbackMessage.innerText = "Lütfen geçerli bir Eposta adresi giriniz!"
        return;
    }
    if (!acceptReceive) {
        formFeedback.style.display = "block";
        formFeedbackMessage.innerText = "Lütfen Eposta yoluyla haber ve promosyon teklifleri almayı kabul ediniz!"
        return;
    }

    if (!acceptPolicy) {
        formFeedback.style.display = "block";
        formFeedbackMessage.innerText = "Lütfen gizlilik politikamızı kabul ediniz!"
        return;
    }
    let referrer = JSON.stringify({
        utm_id: utm_id ? utm_id : "NaN",
        utm_source: utm_source ? utm_source : "NaN",
        utm_medium: utm_medium ? utm_medium : "NaN",
        utm_campaign: utm_campaign ? utm_campaign : "NaN",
        utm_term: utm_term ? utm_term : "NaN",
        utm_content: utm_content ? utm_content : "NaN",
    });

    const payload = {
        email,
        policy: acceptPolicy,
        receive: acceptReceive,
        referrer
    }

    const url = "https://old-hitandboom.vercel.app/api/register"
    loader.style.display = "block"
    formFeedback.style.display = "none";
    submitButton.style.display = "none"
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        //mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });

    const result = await response.json();

    if (result.message) {
        loader.style.display = "none"
        submitButton.style.display = "block"
        formFeedback.style.display = "block";
        formFeedbackMessage.innerText = result.message;
        if (response.status === 201) {
            formFeedback.style.backgroundColor = "#16a34a"
        }
        return;
    }

});
