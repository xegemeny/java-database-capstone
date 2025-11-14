// doctorCard.js
import { showBookingOverlay } from "../loggedPatient.js";
import { deleteDoctor } from "../services/doctorServices.js";
import { getPatientData } from "../services/patientServices.js";

export function createDoctorCard(doctor) {

    const card = document.createElement("div");
    card.classList.add("doctor-card");

    const role = localStorage.getItem("userRole");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("doctor-info");

    const name = document.createElement("h3");
    name.textContent = `${doctor.firstName} ${doctor.lastName}`;

    const specialization = document.createElement("p");
    specialization.textContent = `Specialization: ${doctor.specialization}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${doctor.email}`;

    const availability = document.createElement("p");
    availability.textContent = `Available: ${doctor.availableTimes.join(", ")}`;

    infoDiv.appendChild(name);
    infoDiv.appendChild(specialization);
    infoDiv.appendChild(email);
    infoDiv.appendChild(availability);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("card-actions");

    if (role === "admin") {
        const btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", async () => {

            if (!confirm("Are you sure?")) return;

            const token = localStorage.getItem("token");
            const result = await deleteDoctor(doctor.id, token);

            if (result) {
                alert("Doctor removed.");
                card.remove();
            } else {
                alert("Error deleting doctor.");
            }
        });

        actionsDiv.appendChild(btn);
    }

    else if (role === "patient") {
        const btn = document.createElement("button");
        btn.textContent = "Book Now";

        btn.addEventListener("click", () => {
            alert("You must log in before booking.");
        });

        actionsDiv.appendChild(btn);
    }

    else if (role === "loggedPatient") {
        const btn = document.createElement("button");
        btn.textContent = "Book Now";

        btn.addEventListener("click", async (e) => {
            const token = localStorage.getItem("token");
            const patient = await getPatientData(token);
            showBookingOverlay(e, doctor, patient);
        });

        actionsDiv.appendChild(btn);
    }

    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    return card;
}
