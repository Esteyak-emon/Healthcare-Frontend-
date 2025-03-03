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

import NewHospitalForm from "~/components/forms/hospital"



function HospitalsPage() {
  const data = [
    {
      id: 1,
      name: "Squere Hospital LTD.",
      address: "North Dhanmondi, Dhaka",
      contact: "+88000000000",
    },
    {
      id: 2,
      name: "Greenlife Hospital",
      address: "Green Road, Kathalbagan, Dhaka",
      contact: "+88000000000",
    },
  ]
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Hospitals registered with us</h1>
        <Dialog>
          <DialogTrigger>
            <Button className="hover:cursor-pointer">New Hospital</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new hospital</DialogTitle>
              <DialogDescription>
                Create a new hospital to add to the list.
              </DialogDescription>
            </DialogHeader>
            <NewHospitalForm data={null} mode="new" />
          </DialogContent>
        </Dialog>

      </div>

      <hr className="mb-8 mt-3" />

      <Table>
        <TableCaption>A list of hospitals we serve.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((hospital) => (
            <TableRow key={hospital.id}>
              <TableCell className="font-medium">{hospital.id}</TableCell>
              <TableCell><Link to={`/hospitals/${hospital.id}`}>  {hospital.name}</Link></TableCell>
              <TableCell>{hospital.address}</TableCell>
              <TableCell className="text-right">{hospital.contact}</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Squere Hospital LTD.</TableCell>
            <TableCell>North Dhanmondi, Dhaka</TableCell>
            <TableCell className="text-right">+88000000000</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>

    </div>
  )
}

export default HospitalsPage