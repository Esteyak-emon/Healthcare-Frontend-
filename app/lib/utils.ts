import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(time: string | Date) {
  const Geeks = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
    hour12: true
  };
  const dateformat = new Date(time);

  // @ts-ignore
  const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', Geeks);

  return dateTimeFormat3.format(dateformat)

}