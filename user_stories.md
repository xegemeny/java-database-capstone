    # User Story Template
    **Title:**
    _As a [user role], I want [feature/goal], so that [reason]._
    **Acceptance Criteria:**
    1. [Criteria 1]
    2. [Criteria 2]
    3. [Criteria 3]
    **Priority:** [High/Medium/Low]
    **Story Points:** [Estimated Effort in Points]
    **Notes:**
    - [Additional information or edge cases]
## Admin User Stories
### Title: Admin Login
_As an Admin, I want to log into the portal with my username and password, so that I can manage the platform securely._

**Acceptance Criteria:**
1. Admin can log in using valid credentials.
2. Invalid login attempts are rejected.
3. After login, admin is redirected to the main dashboard.

**Priority:** High  
**Story Points:** 3  
**Notes:** - Admin can only access dashboard after successful login.

---

### Title: Admin Logout
_As an Admin, I want to log out of the portal, so that I can protect system access._

**Acceptance Criteria:**
1. Logout option is visible on all admin pages.
2. After logout, the session ends.
3. The system returns to the login page.

**Priority:** Medium  
**Story Points:** 2  
**Notes:** - Logout removes access until next login.

---

### Title: Add Doctors
_As an Admin, I want to add doctors to the portal, so that new doctors can start using the system._

**Acceptance Criteria:**
1. Admin can fill out a form with doctor details.
2. The doctor appears in the doctor list after being added.
3. A success message is shown after adding.

**Priority:** High  
**Story Points:** 4  
**Notes:** - Required fields include name and specialization.

---

### Title: Delete Doctor Profile
_As an Admin, I want to delete a doctor’s profile, so that I can remove inactive or incorrect users._

**Acceptance Criteria:**
1. Admin can select a doctor profile to delete.
2. System asks for confirmation before deleting.
3. Doctor is removed from the list after deletion.

**Priority:** Medium  
**Story Points:** 3  
**Notes:** - Deletion cannot be undone.

---

### Title: Monthly Appointment Report
_As an Admin, I want to run a report to see the number of appointments per month, so that I can track system usage._

**Acceptance Criteria:**
1. Admin can generate a monthly report.
2. Report shows the total number of appointments by month.
3. Data is accurate and updates automatically.

**Priority:** Low  
**Story Points:** 4  
**Notes:** - Used for tracking appointment trends.

---

## Patient User Stories

### Title: View Doctor List
_As a Patient, I want to view a list of doctors without logging in, so that I can choose one before registering._

**Acceptance Criteria:**
1. A list of doctors is visible on the main page.
2. Each doctor shows name, specialization, and availability.
3. Patients can filter doctors by specialization.

**Priority:** Medium  
**Story Points:** 3  
**Notes:** - No login required for viewing.

---

### Title: Register as Patient
_As a Patient, I want to sign up using my email and password, so that I can create an account._

**Acceptance Criteria:**
1. Patients can register with their basic information.
2. Registration form validates required fields.
3. After successful registration, a confirmation message appears.

**Priority:** High  
**Story Points:** 4  
**Notes:** - Registration is required for booking appointments.

---

### Title: Patient Login
_As a Patient, I want to log into the portal, so that I can view and manage my appointments._

**Acceptance Criteria:**
1. Valid login credentials grant access to the dashboard.
2. Invalid credentials show an error.
3. Patients are redirected to their dashboard after login.

**Priority:** High  
**Story Points:** 3  
**Notes:** - Login form uses email and password.

---

### Title: Book Appointment
_As a Patient, I want to book a one-hour appointment with a doctor, so that I can consult for my health issue._

**Acceptance Criteria:**
1. Available doctors and time slots are shown.
2. Booking is confirmed with a success message.
3. Appointment appears in the patient’s upcoming list.

**Priority:** High  
**Story Points:** 5  
**Notes:** - Appointment duration is one hour.

---

### Title: View Appointments
_As a Patient, I want to view my upcoming appointments, so that I can prepare for my visits._

**Acceptance Criteria:**
1. Upcoming appointments are listed on the dashboard.
2. Details include doctor name, date, and time.
3. Patients can sort or filter appointments.

**Priority:** Medium  
**Story Points:** 3  
**Notes:** - Only future appointments are shown.

---

## Doctor User Stories

### Title: Doctor Login
_As a Doctor, I want to log into the portal, so that I can manage my appointments._

**Acceptance Criteria:**
1. Doctors can log in using valid credentials.
2. Invalid credentials are rejected.
3. Successful login redirects to the doctor dashboard.

**Priority:** High  
**Story Points:** 3  
**Notes:** - Login required for accessing doctor dashboard.

---

### Title: Doctor Logout
_As a Doctor, I want to log out of the portal, so that I can protect my account information._

**Acceptance Criteria:**
1. Logout option is available on all doctor pages.
2. After logout, access to dashboard is blocked.
3. Redirects to login screen.

**Priority:** Medium  
**Story Points:** 2  
**Notes:** - Basic security requirement.

---

### Title: View Appointment Calendar
_As a Doctor, I want to view my appointment calendar, so that I can manage my schedule easily._

**Acceptance Criteria:**
1. Doctors can see daily and weekly appointments.
2. Calendar updates automatically when new appointments are booked.
3. Appointments show patient names and times.

**Priority:** High  
**Story Points:** 4  
**Notes:** - Calendar helps doctors plan their day.

---

### Title: Mark Unavailability
_As a Doctor, I want to mark my unavailable time slots, so that patients cannot book during those times._

**Acceptance Criteria:**
1. Doctors can block specific days or hours.
2. Blocked slots are not available for booking.
3. Changes are reflected immediately.

**Priority:** High  
**Story Points:** 4  
**Notes:** - Prevents double booking.

---

### Title: Update Profile
_As a Doctor, I want to update my profile information, so that patients can see my correct details._

**Acceptance Criteria:**
1. Doctors can edit contact information and specialization.
2. Updated data is saved and shown in the doctor list.
3. Confirmation message appears after update.

**Priority:** Medium  
**Story Points:** 3  
**Notes:** - Doctors can change their details anytime.