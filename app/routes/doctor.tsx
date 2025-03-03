import React, { useState } from 'react'
import NewDoctorForm from '~/components/forms/doctor'
import { Label } from '~/components/ui/label'
import { Switch } from "~/components/ui/switch"
import type { Route } from './+types/doctors';

export async function loader({ params }: Route.LoaderArgs) {
    const doctorId = params.id
    const data = {
        id: doctorId,
        name: "Dr. Muhammod Shadul Alam.",
        specilization: "Medicine",
        qualification: "MBBS, FRCS",
    }
    return data;
}
// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//     console.log(params)
//     const doctorId = params.id
//     const data = {
//         id: doctorId,
//         name: "Squere Doctor LTD.",
//         address: "North Dhanmondi, Dhaka",
//         contact: "+88000000000",
//     }
//     return data;
// }

export function HydrateFallback() {
    return <div>Loading...</div>;
}

function DoctorDetails({ loaderData }: Route.ComponentProps) {
    const [edit, setEdit] = useState(false)
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <h1 className='text-lg'>Doctor details</h1>
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
                        <NewDoctorForm mode='edit' data={loaderData} />
                        :
                        // @ts-ignore
                        <NewDoctorForm mode='read-only' data={loaderData} />
                }
            </div>
        </div>
    )
}

export default DoctorDetails