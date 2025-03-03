import React, { useState } from 'react'
import NewPatientForm from '~/components/forms/patient'
import { Label } from '~/components/ui/label'
import { Switch } from "~/components/ui/switch"
import type { Route } from './+types/patients';

export async function loader({ params }: Route.LoaderArgs) {
    const patientId = params.id
    const data = {
        id: patientId,
        name: "Md. Emon",
        address: "Mirpur, Dhaka",
        contact: "+88000000000",
    }
    return data;
}
// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//     console.log(params)
//     const patientId = params.id
//     const data = {
//         id: patientId,
//         name: "Squere Patient LTD.",
//         address: "North Dhanmondi, Dhaka",
//         contact: "+88000000000",
//     }
//     return data;
// }

export function HydrateFallback() {
    return <div>Loading...</div>;
}

function PatientDetails({ loaderData }: Route.ComponentProps) {
    const [edit, setEdit] = useState(false)
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <h1 className='text-lg'>Patient details</h1>
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
                        <NewPatientForm mode='edit' data={loaderData} />
                        :
                        // @ts-ignore
                        <NewPatientForm mode='read-only' data={loaderData} />
                }
            </div>
        </div>
    )
}

export default PatientDetails