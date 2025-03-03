import React, { useState } from 'react'
import NewAppointmentForm from '~/components/forms/appointment'
import { Label } from '~/components/ui/label'
import { Switch } from "~/components/ui/switch"
import type { Route } from './+types/appointments';

export async function loader({ params }: Route.LoaderArgs) {
    const appointmentId = params.id
    const data = {
        id: appointmentId,
        patient: "Md. Emon",
        hospital: "Mirpur, Dhaka",
        doctor: "+88000000000",
        symptoms: "Fever, Cough, Headache",
        time: "2021-09-01 10:00:00",
        note: "Any note from doctor",
        treatment: "Any treatment from doctor"
    }
    return data;
}
// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//     console.log(params)
//     const appointmentId = params.id
//     const data = {
//         id: appointmentId,
//         name: "Squere Appointment LTD.",
//         address: "North Dhanmondi, Dhaka",
//         contact: "+88000000000",
//     }
//     return data;
// }

export function HydrateFallback() {
    return <div>Loading...</div>;
}

function AppointmentDetails({ loaderData }: Route.ComponentProps) {
    const [edit, setEdit] = useState(false)
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <h1 className='text-lg'>Appointment details</h1>
                <div className='space-x-3 flex justify-center items-center'>
                    <Label htmlFor='edit' className='text-lg text-center'>Edit</Label>
                    <Switch
                        id='edit'
                        checked={edit}
                        onCheckedChange={setEdit} />
                </div>
            </div>
            <hr className='mt-3 mb-8' />
            <div>
                {
                    edit ?
                        // @ts-ignore
                        <NewAppointmentForm mode='edit' data={loaderData} />
                        :
                        // @ts-ignore
                        <NewAppointmentForm mode='read-only' data={loaderData} />
                }
            </div>
        </div>
    )
}

export default AppointmentDetails