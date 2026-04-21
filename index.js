/* ============================================
GODMAX TECH — JAVASCRIPT
============================================ */

// ===== NAVBAR SCROLL =====


const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 20) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

// ===== SCROLL TO TOP BUTTON =====
// make the button show

let btn = document.querySelector(".my-btn");

 window.addEventListener("scroll", function () {
   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

     btn.style.display = "block";
   } else {
     btn.style.display = "none"

   }

 });

// // movement



if (btn) btn.addEventListener("click", () => scrollTo("logo-name"));

//  btn.addEventListener("click", function () {
//   window.scrollTo({ top:0, behavior:"smooth" });

//  }

// );

// ===== LOGO → SCROLL TO TOP =====
const logobtn = document.getElementById("logo-btn");
logobtn.addEventListener("click", function()  {
window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== HAMBURGER / SIDEBAR =====
function ShowSideBar() {
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
sidebar.classList.add("open");
overlay.classList.add("show");
document.body.style.overflow = "hidden";
}

function HideSideBar() {
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
sidebar.classList.remove("open");
overlay.classList.remove("show");
document.body.style.overflow = "";
}

// Close sidebar on ESC key
document.addEventListener("keydown", function (e) {
if (e.key === "Escape") HideSideBar();
});

// ===== SMOOTH SCROLL HELPERS =====
function scrollTo(id) {
const el = document.getElementById(id);
if (el) {
el.scrollIntoView({ behavior: "smooth" });
}
}

// Hire Me buttons → Contact section
const hireme = document.getElementById("hireme");
if (hireme) hireme.addEventListener("click", () => scrollTo("info1"));

const sever =document.getElementById("services");
if(sever) sever.addEventListener("click",() => scrollTo("Transforming"));

const sevs =document.getElementById("serv");
if(sevs) sevs.addEventListener("click",() => scrollTo("Transforming"));

const port =document.getElementById("Portfolio");
if(port) port.addEventListener("click",() => scrollTo("Experience-section"));

const port2 =document.getElementById("Portf");
if(port2) port2.addEventListener("click",() => scrollTo("Experience-section"));


const hideHireBtn = document.getElementById("hide-hire-btn");
if (hideHireBtn) hideHireBtn.addEventListener("click", () => { scrollTo("info1"); HideSideBar(); });

const hideContactBtn = document.getElementById("hide-contact-btn");
if (hideContactBtn) hideContactBtn.addEventListener("click", () => scrollTo("info1"));

const conBtn = document.getElementById("con-btn");
if (conBtn) conBtn.addEventListener("click", () => scrollTo("info1"));

// Start Project → Form
const startBtn = document.getElementById("start");
if (startBtn) startBtn.addEventListener("click", () => scrollTo("form"));

// Testimonials
const testBtn = document.getElementById("test-btn");
if (testBtn) testBtn.addEventListener("click", () => scrollTo("testimonies"));

const testimonyHideBtn = document.getElementById("testimony-hide-btn");
if (testimonyHideBtn) testimonyHideBtn.addEventListener("click", () => scrollTo("testimonies"));

// Experience
const experBtn = document.getElementById("exper-btn");
if (experBtn) experBtn.addEventListener("click", () => scrollTo("Experience-section"));

const experienceHideBtn = document.getElementById("experience-hide-btn");
if (experienceHideBtn) experienceHideBtn.addEventListener("click", () => scrollTo("Experience-section"));

// Skills
const skillBtn3 = document.getElementById("skill-btn3");
if (skillBtn3) skillBtn3.addEventListener("click", () => scrollTo("Skill-section"));

const skillHideBtn = document.getElementById("skill-hide-btn");
if (skillHideBtn) skillHideBtn.addEventListener("click", () => scrollTo("Skill-section"));

// ===== FAQ ACCORDION =====
const helpBoxes = document.querySelectorAll(".help-box");

helpBoxes.forEach(box => {
const header = box.querySelector(".help-header");

header.addEventListener("click", () => {
// Close all others
helpBoxes.forEach(item => {
if (item !== box) item.classList.remove("active");
});
// Toggle current
box.classList.toggle("active");
});
});

// ===== CONTACT FORM VALIDATION =====
const sendBtn = document.getElementById("button-send");

if (sendBtn) {
sendBtn.addEventListener("click", function (e) {
e.preventDefault();


const uname    = document.getElementById("userName").value.trim();
const email    = document.getElementById("userEmail").value.trim();
const usubject = document.getElementById("userSubject").value.trim();
const umessage = document.getElementById("userMessage").value.trim();
const message  = document.getElementById("formResponse1");

function showError(msg) {
  message.innerHTML = msg;
  message.style.color = "#e00";
}

if (!uname)                    return showError("⚠️ Name field is required.");
if (!email)                    return showError("⚠️ Email field is required.");
if (!email.includes("@"))      return showError("⚠️ Please enter a valid email.");
if (!usubject)                 return showError("⚠️ Subject field is required.");
if (!umessage)                 return showError("⚠️ Message field is required.");

// Submit the form
const form = document.getElementById("collabContactForm");
const formData = new FormData(form);

sendBtn.textContent = "Sending...";
sendBtn.disabled = true;

fetch(form.action, {
  method: "POST",
  body: formData,
  headers: { Accept: "application/json" }
})
  .then(res => {
    if (res.ok) {
      message.style.color = "green";
      message.innerText = "✅ Message sent successfully! I'll get back to you soon.";
      form.reset();
    } else {
      message.style.color = "#e00";
      message.innerText = "❌ Something went wrong. Please try again.";
    }
  })
  .catch(() => {
    message.style.color = "#e00";
    message.innerText = "❌ Network error. Please try again.";
  })
  .finally(() => {
    sendBtn.textContent = "Send Message ✈️";
    sendBtn.disabled = false;
  });


});
}





// featured project


const filterButtons = document.querySelectorAll(".filter-btnft");
const cards = document.querySelectorAll(".cardft");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

  });
});