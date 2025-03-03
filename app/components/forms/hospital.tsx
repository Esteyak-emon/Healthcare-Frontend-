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
    address: z.string().min(2).max(255),
    contact: z.string().min(2).max(255),
})

type Hospital = z.infer<typeof formSchema>

export default function NewHospitalForm({ data=null, mode }: { data: Hospital | null, mode: 'read-only' | 'edit' | 'new' }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data?.name || '',
            address: data?.address || '',
            contact: data?.contact || '',
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
                                    <Input placeholder="Squere Hospital LTD." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Hospital name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        disabled={mode === 'read-only'}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="North Dhanmondi, Dhaka" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Where the hospital is located
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="contact"
                        disabled={mode === 'read-only'}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact</FormLabel>
                                <FormControl>
                                    <Input placeholder="+8801912312312" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Contact number for the hospital
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
