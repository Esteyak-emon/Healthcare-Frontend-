import { NavLink as Link } from "react-router"

import { Button } from "~/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"

import NewPatientForm from "~/components/forms/patient"



function PatientsPage() {
  const data = [
    {
      id: 1,
      name: "Md. Emon",
      address: "Mirpur, Dhaka",
      contact: "+88000000000",
    },
    {
      id: 2,
      name: "Sadman Sakib",
      address: "Mirpur, Dhaka",
      contact: "+88000000000",
    },
  ]
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Patients registered with us</h1>
        <Dialog>
          <DialogTrigger>
            <Button className="hover:cursor-pointer">New Patient</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new patient</DialogTitle>
              <DialogDescription>
                Create a new patient to add to the list.
              </DialogDescription>
            </DialogHeader>
            <NewPatientForm data={null} mode="new" />
          </DialogContent>
        </Dialog>

      </div>

      <hr className="mb-8 mt-3" />

      <Table>
        <TableCaption>A list of patients we serve.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium">{patient.id}</TableCell>
              <TableCell><Link to={`/patients/${patient.id}`}>  {patient.name}</Link></TableCell>
              <TableCell>{patient.address}</TableCell>
              <TableCell className="text-right">{patient.contact}</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Squere Patient LTD.</TableCell>
            <TableCell>North Dhanmondi, Dhaka</TableCell>
            <TableCell className="text-right">+88000000000</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>

    </div>
  )
}

export default PatientsPage