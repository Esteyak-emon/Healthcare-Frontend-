import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"

const formSchema = z.object({
    name: z.string().min(2).max(255),
    specilization: z.string().min(2).max(255),
    qualification: z.string().min(2).max(255),
})

type Patient = z.infer<typeof formSchema>

export default function NewPatientForm({ data=null, mode }: { data: Patient | null, mode: 'read-only' | 'edit' | 'new' }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data?.name || '',
            specilization: data?.specilization || '',
            qualification: data?.qualification || '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        disabled={mode === 'read-only'}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Dr. Shahidul Islam" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Patient name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="specilization"
                        disabled={mode === 'read-only'}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Specilization</FormLabel>
                                <FormControl>
                                    <Input placeholder="Medicine" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Patients specilized field
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="qualification"
                        disabled={mode === 'read-only'}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Qualification</FormLabel>
                                <FormControl>
                                    <Input placeholder="MBBS" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Educational degrees or professional achievements
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
