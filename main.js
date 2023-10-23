let prevSelectedTopic = null;
let nthTopic = -1;
let certificationImages = ['AI900', 'activeloop', 'python', 'mssql', 'cprog', 'embedded', 'electronics', 'html', 'css', 'js', 'vuejs']
let certificationDetails = ["AI-900 is a AI fundamentals certification. It's one of the microsoft certifications.",
    "Gen AI 360 is a Langchain certification from activeloop",
    "Got this python certification from a bootcamp conducted by GUVI with the Govt. of India",
    "Learned and got certified in MS SQL server, a training conducted by ATOS pvt. Ltd",
    "Got certified in C programming from Udemy learning platform",
    "Did projects on embedded systems. And its one of my fields of interest",
    "Did a 4 years PG course on electronics and did a fairly good job on the projects and workshops.",
    "HTML a front end language for the structure of the website",
    "CSS for the styling of the website",
    "JS makes the website work",
    "Veu JS a open-source frontend ljavascript framework makes the life of a developer a little easier"]


let achievementTopic = document.querySelectorAll(".topic");
let achievementsList = document.querySelector('.achievement-topics')
let certificationTopic = document.querySelector('.cert-heading');
let certificationImage = document.querySelector('.cert-img');
let certificationDetail = document.querySelector(".cert-detail")


document.documentElement.style.scrollBehavior = "smooth";

var typed = new Typed(".text" , {
    strings:["Frontend Developer","UI Designer","IOT Enthusiast"],
    typeSpeed : 50,
    backSpeed : 50,
    backDelay : 1000,
    loop : true
});

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
    let messageBody = "Got mail from : " + userName + "<br/> and Email id is : " + email + ". <br/>The message is : " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

function showNav(hamburgerIcon) {
    // let isClicked = true;
    let navElements = document.querySelectorAll(".new-nav-item");
    // if (isClicked) {
    //     hamburger.setAttribute("data-clicked", "false");
    //     navElements.forEach((item) => {
    //         item.style.display = "block";
    //     })
    // }
    // if (!hamburger.dataset.clicked) {
    //     hamburger.removeAttribute("data-clicked");
    //     navElements.forEach((item) => {
    //         item.style.display = "none";
    //     })
    //     isClicked = false;
    //     // navElements.style.display = "block"
    // }
    // document.querySelector(".hamburger").toggle(
    //     function(){
            navElements.forEach((item) => {
                        item.style.display = "block";
                    })
    //     },
    //     function(){
    //         navElements.forEach((item) => {
    //                     item.style.display = "none";
    //                 })
    //     }
    // )
}