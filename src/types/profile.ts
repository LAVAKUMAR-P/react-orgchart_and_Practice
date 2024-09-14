export interface UserProfile {
    profile: {
        name: string;
        headline: string;
        last_updated: string;
        location: {
            city: string;
            country: string;
        };
        experience_years: number;
        salary: {
            current_salary: string;
            expected_salary: string;
        };
        contact: {
            phone: string;
            email: string;
            notice_period: string;
        };
        availability: {
            can_start_after_offer: string;
        };
        preferred_work_locations: string[];
        resume: {
            file_name: string;
            uploaded_on: string;
            supported_formats: string[];
            max_size_mb: number;
        };
        summary: string;
        skills: {
            name: string;
            level: string;
            IT_skill: boolean;
        }[];
        employment: {
            title: string;
            company: string;
            type: string;
            start_date: string;
            end_date: string;
            duration: string;
            notice_period: string;
            description: string;
        }[];
        education: {
            degree: string;
            institution: string;
            year: string;
            type: string;
        }[];
        projects: {
            name: string;
            company: string;
            location: string;
            start_date: string;
            end_date: string;
            description: string;
        }[];
        online_profiles: {
            platform: string;
            url: string;
        }[];
        certifications: {
            title: string;
            institution: string;
            url: string;
            validity: string;
        }[];
        personal_details: {
            gender: string;
            marital_status: string;
            dob: string;
            differently_abled: string;
            career_break: string;
            address: string;
            languages: {
                language: string;
                proficiency: {
                    read: string;
                    write: string;
                    speak: string;
                };
            }[];
        };
    };
}