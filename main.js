let prevSelectedTopic = null;
let nthTopic = -1;
let certificationImages = ['AI900', 'activeloop', 'python', 'mssql', 'cprog', 'embedded', 'electronics']
let certificationDetails = ["AI-900 is a AI fundamentals certification. It's one of the microsoft certifications.",
    "Gen AI 360 is a Langchain certification from activeloop",
    "Got this python certification from a bootcamp conducted by GUVI with the Govt. of India",
    "Learned and got certified in MS SQL server, a training conducted by ATOS pvt. Ltd",
    "Got certified in C programming from Udemy learning platform",
    "Did projects on embedded systems. And its one of my fields of interest",
    "Did a 4 years PG course on electronics and did a fairly good job on the projects and workshops."]


let achievementTopic = document.querySelectorAll(".topic");
let achievementsList = document.querySelector('.achievement-topics')
let certificationTopic = document.querySelector('.cert-heading');
let certificationImage = document.querySelector('.cert-img');
let certificationDetail = document.querySelector(".cert-detail")


document.documentElement.style.scrollBehavior = "smooth";

achievementTopic.forEach((item) => {
    item.addEventListener('click', function () {
        const itemId = item.getAttribute('id')
        certificationTopic.innerHTML = item.innerHTML;
        certificationImage.setAttribute("src", `images/${certificationImages[itemId - 1]}-img.png`);
        certificationDetail.innerHTML = certificationDetails[itemId - 1];
        item.classList.add('active-topic')
        if (prevSelectedTopic) {
            prevSelectedTopic.classList.remove('active-topic')
        }
        prevSelectedTopic = item;
    })
})

function changeImg(img) {

    img.src = "images/profile-img.avif";

}


function emailSend() {
    console.log("sent")
    let userName = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let messageBody = "Got mail from : " + userName + "<br/> and Email id is : " +email+ ". <br/>The message is : "+message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}