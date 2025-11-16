
import { getAllAppointments } from "./services/appointmentRecordService.js";
import { createPatientRow } from "./components/patientRows.js";

const tableBody = document.getElementById("patientTableBody");

let selectedDate = new Date().toISOString().split("T")[0];  // "YYYY-MM-DD"
let token = localStorage.getItem("token");
let patientName = "null";

document.getElementById("searchBar").addEventListener("input", (e) => {
    const value = e.target.value.trim();

    patientName = value !== "" ? value : "null";
    loadAppointments();
});

document.getElementById("todayButton").addEventListener("click", () => {
    selectedDate = new Date().toISOString().split("T")[0];

    document.getElementById("datePicker").value = selectedDate;

    loadAppointments();
});

document.getElementById("datePicker").addEventListener("change", (e) => {
    selectedDate = e.target.value;
    loadAppointments();
});

async function loadAppointments() {
    try {
        const appointments = await getAllAppointments(selectedDate, patientName, token);

        tableBody.innerHTML = ""; // Clear table

        if (!appointments || appointments.length === 0) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td colspan="4" style="text-align:center; font-weight:bold;">
                    No Appointments found for today.
                </td>`;
            tableBody.appendChild(row);
            return;
        }

        appointments.forEach(app => {
            const patient = {
                id: app.patientId,
                name: app.patientName,
                phone: app.patientPhone,
                email: app.patientEmail
            };

            const row = createPatientRow(patient);
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error loading appointments:", error);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td colspan="4" style="text-align:center; color:red;">
                Error loading appointments. Try again later.
            </td>`;
        tableBody.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("datePicker").value = selectedDate;
    loadAppointments();
});
