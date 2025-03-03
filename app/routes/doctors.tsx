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

import NewDoctorForm from "~/components/forms/doctor"



function DoctorsPage() {
  const data = [
    {
      id: 1,
      name: "Dr. Muhammod Shadul Alam.",
      specilization: "Medicine",
      qualification: "MBBS, FRCS",
    },
    {
      id: 2,
      name: "Dr. Harsid Kumar",
      specilization: "Skin",
      qualification: "MBBS",
    },
  ]
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Doctors registered with us</h1>
        <Dialog>
          <DialogTrigger>
            <Button className="hover:cursor-pointer">New Doctor</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new doctor</DialogTitle>
              <DialogDescription>
                Create a new doctors to add to the list.
              </DialogDescription>
            </DialogHeader>
            <NewDoctorForm data={null} mode="new" />
          </DialogContent>
        </Dialog>

      </div>

      <hr className="mb-8 mt-3" />

      <Table>
        <TableCaption>A list of doctors we serve.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Specilization</TableHead>
            <TableHead className="text-right">Qualification</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((doctors) => (
            <TableRow key={doctors.id}>
              <TableCell className="font-medium">{doctors.id}</TableCell>
              <TableCell><Link to={`/doctors/${doctors.id}`}>  {doctors.name}</Link></TableCell>
              <TableCell>{doctors.specilization}</TableCell>
              <TableCell className="text-right">{doctors.qualification}</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Squere Doctors LTD.</TableCell>
            <TableCell>North Dhanmondi, Dhaka</TableCell>
            <TableCell className="text-right">+88000000000</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>

    </div>
  )
}

export default DoctorsPage