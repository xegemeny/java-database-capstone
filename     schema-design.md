# Smart Clinic – Schema Design

## MySQL Database Design

### Table: patients
- id: INT, Primary Key, Auto Increment
- first_name: VARCHAR(80), NOT NULL
- last_name: VARCHAR(80), NOT NULL
- email: VARCHAR(120), UNIQUE, NOT NULL
- phone: VARCHAR(40)
- date_of_birth: DATE

### Table: doctors
- id: INT, Primary Key, Auto Increment
- first_name: VARCHAR(80), NOT NULL
- last_name: VARCHAR(80), NOT NULL
- specialization: VARCHAR(120), NOT NULL
- email: VARCHAR(120), UNIQUE, NOT NULL
- phone: VARCHAR(40)

### Table: appointments
- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key → doctors(id)
- patient_id: INT, Foreign Key → patients(id)
- start_time: DATETIME, NOT NULL
- end_time: DATETIME, NOT NULL
- status: ENUM('BOOKED','CANCELLED','COMPLETED'), NOT NULL
- notes: VARCHAR(500)

### Table: admin
- id: INT, Primary Key, Auto Increment
- username: VARCHAR(80), UNIQUE, NOT NULL
- email: VARCHAR(120), UNIQUE, NOT NULL
- password_hash: VARCHAR(255), NOT NULL


## MongoDB Collection Design

### Collection: prescriptions

```json
{
  "patientId": 1,
  "doctorId": 2,
  "issuedAt": "2025-10-25T10:05:00Z",
  "items": [
    { "drug": "Paracetamol", "dosage": "500mg", "frequency": "2x/day", "durationDays": 5 },
    { "drug": "Ibuprofen", "dosage": "200mg", "frequency": "3x/day", "durationDays": 3 }
  ],
  "notes": "Take after meals"
}
