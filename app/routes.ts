import {
    type RouteConfig,
    index,
    route,
    layout,
    prefix
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("layouts/BaseLayout.tsx", [
        route('hospitals', 'routes/hospitals.tsx'),
        route('doctors', 'routes/doctors.tsx'),
        route('patients', 'routes/patients.tsx'),
        route('appointments', 'routes/appointments.tsx'),
        ...prefix('hospitals', [
            route(':id', 'routes/hospital.tsx'),
        ]),
        ...prefix('doctors', [
            route(':id', 'routes/doctor.tsx'),
        ]),
        ...prefix('patients', [
            route(':id', 'routes/patient.tsx'),
        ]),
        ...prefix('appointments', [
            route(':id', 'routes/appointment.tsx'),
        ]),
        route('contact', 'routes/contact.tsx'),
    ]),

] satisfies RouteConfig;
