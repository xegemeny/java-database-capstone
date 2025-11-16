import { openModal, closeModal } from "../components/modals.js";
import { getDoctors, filterDoctors, saveDoctor } from "../services/doctorServices.js";
import { createDoctorCard } from "../components/doctorCard.js";


document.getElementById("addDocBtn")?.addEventListener("click", () => {
    openModal("addDoctor");
});


window.addEventListener("DOMContentLoaded", () => {
    loadDoctorCards();
});


async function loadDoctorCards() {
    try {
        const doctors = await getDoctors();
        renderDoctorCards(doctors);
    } catch (error) {
        console.error("Error loading doctors:", error);
    }
}

document.getElementById("searchBar")?.addEventListener("input", filterDoctorsOnChange);
document.getElementById("filterTime")?.addEventListener("change", filterDoctorsOnChange);
document.getElementById("filterSpecialty")?.addEventListener("change", filterDoctorsOnChange);

async function filterDoctorsOnChange() {
    const name = document.getElementById("searchBar").value.trim() || null;
    const time = document.getElementById("filterTime").value || null;
    const specialty = document.getElementById("filterSpecialty").value || null;

    try {
        const result = await filterDoctors(name, time, specialty);

        if (!result.doctors || result.doctors.length === 0) {
            document.getElementById("content").innerHTML =
                `<p style="padding:10px; font-size:18px;">No doctors found with the given filters.</p>`;
            return;
        }

        renderDoctorCards(result.doctors);
    } catch (e) {
        console.error(e);
        alert("Something went wrong while filtering doctors!");
    }
}

function renderDoctorCards(doctors) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    doctors.forEach((doc) => {
        const card = createDoctorCard(doc); // <- kart yaratma
        contentDiv.appendChild(card);
    });
}

window.adminAddDoctor = async function () {
    const name = document.getElementById("docName").value;
    const specialty = document.getElementById("docSpecialty").value;
    const email = document.getElementById("docEmail").value;
    const password = document.getElementById("docPassword").value;
    const phone = document.getElementById("docPhone").value;

    const times = Array.from(document.querySelectorAll("input[name='availableTime']:checked"))
        .map(cb => cb.value);

    const token = localStorage.getItem("token");
    if (!token) {
        alert("You must be logged in as ADMIN to add a doctor!");
        return;
    }

    const doctor = {
        name,
        specialty,
        email,
        password,
        mobileNo: phone,
        availability: times
    };

    const result = await saveDoctor(doctor, token);

    if (result.success) {
        alert("Doctor added successfully!");
        closeModal("addDoctor");
        loadDoctorCards(); // refresh list
    } else {
        alert("Error: " + result.message);
    }
};
