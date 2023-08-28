// register form
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let acceptReceive = document.getElementById("box-1").checked
    let acceptPolicy = document.getElementById("box-2").checked

    let formFeedback = document.getElementById("form-feedback")
    let formFeedbackMessage = document.getElementById("form-feedback-message")

    //resetting form state
    formFeedback.style.display = "none";
    formFeedbackMessage.innerText = "";


    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(email);
    console.log(acceptReceive);
    console.log(acceptPolicy);

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

    const payload = {
        email,
        policy: acceptPolicy,
        receive: acceptReceive
    }

    const url = "https://hitandboom.com/api/register"
    console.log(payload);
    console.log(JSON.stringify(payload));

    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    console.log(response)

    const result = await response.json();

    console.log(result);
   
});
