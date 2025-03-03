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

import NewAppointmentForm from "~/components/forms/appointment"
import { formatTime } from "~/lib/utils"



function AppointmentsPage() {
  const data = [
    {
      id: 1,
      patient: "Md. Emon",
      hospital: "Mirpur, Dhaka",
      doctor: "+88000000000",
      symptoms: "Fever, Cough, Headache",
      time: "2021-09-01 10:00:00",
      note: "Any note from doctor",
      treatment: "Any treatment from doctor"
    }
  ]
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Appointments registered with us</h1>
        <Dialog>
          <DialogTrigger>
            <Button className="hover:cursor-pointer">New Appointment</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new appointment</DialogTitle>
              <DialogDescription>
                Create a new appointment to add to the list.
              </DialogDescription>
            </DialogHeader>
            <NewAppointmentForm data={null} mode="new" />
          </DialogContent>
        </Dialog>

      </div>

      <hr className="mb-8 mt-3" />

      <Table>
        <TableCaption>A list of appointments we serve.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Hospital Name</TableHead>
            <TableHead>Doctor Name</TableHead>
            <TableHead>Symptoms</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">{appointment.id}</TableCell>
              <TableCell>{appointment.patient}</TableCell>
              <TableCell>{appointment.hospital}</TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.symptoms}</TableCell>
              <TableCell>{formatTime(appointment.time)}</TableCell>
              <TableCell className="text-right">
                <Link to={`/appointments/${appointment.id}`}>
                  <Button className="cursor-pointer">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Squere Appointment LTD.</TableCell>
            <TableCell>North Dhanmondi, Dhaka</TableCell>
            <TableCell className="text-right">+88000000000</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>

    </div>
  )
}

export default AppointmentsPage