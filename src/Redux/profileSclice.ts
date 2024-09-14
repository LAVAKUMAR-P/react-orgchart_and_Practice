import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../types/profile";



const initialState:UserProfile = {
    "profile": {
      "name": "",
      "headline": "",
      "last_updated": "",
      "location": {
        "city": "",
        "country": ""
      },
      "experience_years": 0,
      "salary": {
        "current_salary": "",
        "expected_salary": ""
      },
      "contact": {
        "phone": "",
        "email": "",
        "notice_period": ""
      },
      "availability": {
        "can_start_after_offer": ""
      },
      "preferred_work_locations": [],
      "resume": {
        "file_name": "",
        "uploaded_on": "",
        "supported_formats": [],
        "max_size_mb": 0
      },
      "summary": "",
      "skills": [
        { "name": "", "level": "", "IT_skill": false }
      ],
      "employment": [
        {
          "title": "",
          "company": "",
          "type": "",
          "start_date": "",
          "end_date": "",
          "duration": "",
          "notice_period": "",
          "description": ""
        }
      ],
      "education": [
        {
          "degree": "",
          "institution": "",
          "year": "",
          "type": ""
        }
      ],
      "projects": [
        {
          "name": "",
          "company": "",
          "location": "",
          "start_date": "",
          "end_date": "",
          "description": ""
        }
      ],
      "online_profiles": [
        {
          "platform": "",
          "url": ""
        }
      ],
      "certifications": [
        {
          "title": "",
          "institution": "",
          "url": "",
          "validity": ""
        }
      ],
      "personal_details": {
        "gender": "",
        "marital_status": "",
        "dob": "",
        "differently_abled": "",
        "career_break": "",
        "address": "",
        "languages": [
          {
            "language": "",
            "proficiency": {
              "read": "",
              "write": "",
              "speak": ""
            }
          }
        ]
      }
    }
}
  


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{
     addProfileData: (state,action) => {
        state = action.payload
     }
    }
})

export const {addProfileData} = profileSlice.actions

export default profileSlice.reducer





