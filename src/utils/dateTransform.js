import { format, formatDistanceToNow } from 'date-fns'

export function getDate(dateInfo) {
    return formatDistanceToNow(new Date(dateInfo)) 
}

export function formatEventStart(start){
    return format(new Date(start), 'Pp')
}