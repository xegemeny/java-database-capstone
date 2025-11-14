// /static/js/components/header.js
// Reusable header renderer: role-aware (admin, doctor, patient, loggedPatient)

function renderHeader() {
    const headerDiv = document.getElementById("header");
    if (!headerDiv) return;

    if (window.location.pathname === "/" || window.location.pathname.endsWith("/index.html")) {
        localStorage.removeItem("userRole");
        localStorage.removeItem("token");
        headerDiv.innerHTML = baseHeaderOnly();
        return;
    }

    const role = localStorage.getItem("userRole");
    const token = localStorage.getItem("token");

    if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
        localStorage.removeItem("userRole");
        alert("Session expired or invalid login. Please log in again.");
        window.location.href = "/";
        return;
    }

    let headerContent = `
    <header class="header">
      <div class="logo-section">
        <img src="/assets/images/logo/logo.png" alt="Hospital CRM Logo" class="logo-img">
        <span class="logo-title">Hospital CMS</span>
      </div>
      <nav class="nav">
  `;

    if (role === "admin") {
        headerContent += `
      <button id="addDocBtn" class="adminBtn" onclick="openModal('addDoctor')">Add Doctor</button>
      <a href="#" id="logoutLink">Logout</a>
    `;
    } else if (role === "doctor") {
        headerContent += `
      <button id="doctorHomeBtn" class="adminBtn">Home</button>
      <a href="#" id="logoutLink">Logout</a>
    `;
    } else if (role === "loggedPatient") {
        headerContent += `
      <button id="patientHomeBtn" class="adminBtn">Home</button>
      <button id="patientAppointmentsBtn" class="adminBtn">Appointments</button>
      <a href="#" id="logoutPatientLink">Logout</a>
    `;
    } else {
        headerContent += `
      <button id="patientLogin" class="adminBtn">Login</button>
      <button id="patientSignup" class="adminBtn">Sign Up</button>
    `;
    }

    headerContent += `</nav></header>`;
    headerDiv.innerHTML = headerContent;

    attachHeaderButtonListeners(role);
}

function baseHeaderOnly() {
    return `
    <header class="header">
      <div class="logo-section">
        <img src="/assets/images/logo/logo.png" alt="Hospital CRM Logo" class="logo-img">
        <span class="logo-title">Hospital CMS</span>
      </div>
    </header>
  `;
}

function attachHeaderButtonListeners(role) {
    const logoutLink = document.getElementById("logoutLink");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            logout();
        });
    }

    const doctorHomeBtn = document.getElementById("doctorHomeBtn");
    if (doctorHomeBtn) {
        doctorHomeBtn.addEventListener("click", function () {
            window.location.href = "/doctor/doctorDashboard"; // controller mapping’in buysa
        });
    }

    const loginBtn = document.getElementById("patientLogin");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            if (typeof openModal === "function") openModal("patientLogin");
        });
    }
    const signupBtn = document.getElementById("patientSignup");
    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            if (typeof openModal === "function") openModal("patientSignup");
        });
    }

    const patientHomeBtn = document.getElementById("patientHomeBtn");
    if (patientHomeBtn) {
        patientHomeBtn.addEventListener("click", function () {
            window.location.href = "/pages/loggedPatientDashboard.html";
        });
    }
    const patientAppointmentsBtn = document.getElementById("patientAppointmentsBtn");
    if (patientAppointmentsBtn) {
        patientAppointmentsBtn.addEventListener("click", function () {
            window.location.href = "/pages/patientAppointments.html";
        });
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.href = "/";
}

function logoutPatient() {
    localStorage.removeItem("token");
    localStorage.setItem("userRole", "patient");
    window.location.href = "/pages/patientDashboard.html";
}

window.renderHeader = renderHeader;
window.logout = logout;
window.logoutPatient = logoutPatient;

document.addEventListener("DOMContentLoaded", renderHeader);
