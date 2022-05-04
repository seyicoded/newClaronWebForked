import React, {useEffect, useState} from 'react'
import './DoctorNotifcation.css'
import DoctorLayout from '../../Pages/DoctorLayout';
import * as API from "../../Api/DoctorApi";
const notification = [
    {
        id: 1,
        title: "Drug Notification From Samuel",
        prescription:"You have a new Drug Prescription from Samuel",
        status:"Follow Drug Prescription",
        date: "05/05/2021 07:23 PM"
    },
    {
        id: 2,
        title: "Lab prescription From Samuel",
        prescription:"You have a new lab request from Samuel",
        status:"Follow lab test",
        date: "30/08/2021 04:54 PM"
    },
    {
        id: 3,
        title: "Lab prescription From Samuel",
        prescription:"You have a new lab request from Samuel",
        status:"Follow Drug test",
        date: "30/08/2021 02:31 PM"
    },
    {
        id: 4,
        title: "Request Made",
        prescription:"Your request to Ambulance/Emergency Requests 566061828 was made successful",
        status:"",
        date: "05/05/2021 07:23 PM"
    }
]
function DoctorNotification() {
    const [notifications, setNotifications] = useState(null)

    useEffect(() => {
        const getNotifications = async() => {
            const response = await API.getNotifications()
            console.log(response, "notifications")
            setNotifications(response)
        }

        getNotifications()
    },[])
    return (
        <>
         <DoctorLayout>
         <div className="notification-top-container">
            <h4>Notifications</h4>
                {notifications && notifications.length ? notifications.map((data)=>{
                    return(
                <div class="notification-container">
                <h4  class="notification-title">{data.title}<span className="time">{data.date}</span></h4>
                <p>{data.prescription}</p>
              </div>
                    )
                }) : <p>No notifications available</p>}
        </div>
         </DoctorLayout>
        </>
       
    )
}

export default DoctorNotification
