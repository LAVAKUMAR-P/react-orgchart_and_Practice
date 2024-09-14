import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {get} from 'lodash';

interface dataType {
    icon:string|JSX.Element,
    name:string,
    path:string,
}
function BasicinfoCard(): JSX.Element {
  const dataOne : dataType[] = [
    {
      icon: <CiLocationOn/>,
      name: "Location",
      path: "location.city",
    },
    {
      icon: <MdWorkOutline/>,
      name: "Experience",
      path: "experience_years",
    },
    {
      icon: <FaRegMoneyBillAlt/>,
      name: "Current Salary",
      path: "salary.current_salary",
    },
  ];
  const dataTwo: dataType[]  = [
    {
      icon: <CiMobile3/>,
      name: "Mobile Number",
      path: "contact.phone",
    },
    {
      icon: <MdOutlineAttachEmail/>,
      name: "Email",
      path: "email",
    },
    {
      icon: <SlCalender/>,
      name: "Can join",
      path: "notice_period",
    },
  ];

  return (
    <div>
      <div>
      {
        dataOne.map((data,index)=>{
           return <li key={index}>{data.icon} : {get()}</li>
        })
      }
      </div>
      <div>
      {
        dataTwo.map((data,index)=>{
           return <li key={index}>{data.name}</li>
        })
      }
      </div>
    </div>
  );
}

export default BasicinfoCard;
