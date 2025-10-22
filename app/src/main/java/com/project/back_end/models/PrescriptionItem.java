package com.project.back_end.models;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class PrescriptionItem {

    @NotNull(message = "Drug name cannot be null")
    @Size(min = 3, max = 100, message = "Drug name must be between 3 and 100 characters")
    private String drug;

    @NotNull(message = "Dosage cannot be null")
    @Size(min = 3, max = 20, message = "Dosage must be between 3 and 20 characters")
    private String dosage;

    @NotNull(message = "Frequency cannot be null")
    @Size(min = 3, max = 50, message = "Frequency must be between 3 and 50 characters")
    private String frequency;

    @NotNull(message = "Duration days cannot be null")
    private Integer durationDays;

    public PrescriptionItem() {}

    public PrescriptionItem(String drug, String dosage, String frequency, Integer durationDays) {
        this.drug = drug;
        this.dosage = dosage;
        this.frequency = frequency;
        this.durationDays = durationDays;
    }

    public String getDrug() { return drug; }
    public void setDrug(String drug) { this.drug = drug; }

    public String getDosage() { return dosage; }
    public void setDosage(String dosage) { this.dosage = dosage; }

    public String getFrequency() { return frequency; }
    public void setFrequency(String frequency) { this.frequency = frequency; }

    public Integer getDurationDays() { return durationDays; }
    public void setDurationDays(Integer durationDays) { this.durationDays = durationDays; }
}
