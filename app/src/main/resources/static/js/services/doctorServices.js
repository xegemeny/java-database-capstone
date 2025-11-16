import { API_BASE_URL } from "../config/config.js";

const DOCTOR_API = API_BASE_URL + "/doctor";


export async function getDoctors() {
    try {
        const response = await fetch(DOCTOR_API);

        if (!response.ok) {
            console.error("Failed to fetch doctors");
            return [];
        }

        const data = await response.json();
        return data.doctors || [];
    } catch (error) {
        console.error("Error fetching doctors:", error);
        return [];
    }
}


export async function deleteDoctor(id, token) {
    try {
        const url = `${DOCTOR_API}/delete/${id}/${token}`;
        const response = await fetch(url, { method: "DELETE" });

        const data = await response.json();

        return {
            success: response.ok,
            message: data.message || "An error occurred"
        };
    } catch (error) {
        console.error("Delete doctor error:", error);
        return {
            success: false,
            message: "Failed to delete doctor"
        };
    }
}


export async function saveDoctor(doctor, token) {
    try {
        const url = `${DOCTOR_API}/save/${token}`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(doctor)
        });

        const data = await response.json();

        return {
            success: response.ok,
            message: data.message || "Unknown error"
        };
    } catch (error) {
        console.error("Save doctor error:", error);
        return {
            success: false,
            message: "Failed to save doctor"
        };
    }
}

export async function filterDoctors(name, time, specialty) {
    try {
        const url = `${DOCTOR_API}/filter/${name}/${time}/${specialty}`;

        const response = await fetch(url);

        if (!response.ok) {
            console.error("Filter failed:", response.status);
            return { doctors: [] };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Filter error:", error);
        alert("Error filtering doctors");
        return { doctors: [] };
    }
}
