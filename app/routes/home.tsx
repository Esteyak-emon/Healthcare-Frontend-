import { redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="max-w-3xl h-56 bg-white rounded-sm shadow-sm p-5 flex flex-col gap-10 justify-center items-center">
        <h1 className='font-bold text-3xl text-orange-500'>
          <a href="/">
            Healthcare
          </a>
        </h1>
        <ol className='w-full flex justify-center items-center gap-10 text-xl'>
          <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
            <a href="/hospitals">
              Hospitals
            </a>
          </li>
          <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
            <a href="/doctors">
              Doctors
            </a>
          </li>
          <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
            <a href="/patients">
              Patients
            </a>
          </li>
          <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
            <a href="/appoinments">
              Appointments
            </a>
          </li>
        </ol>
      </div>
    </main>
  );
}
