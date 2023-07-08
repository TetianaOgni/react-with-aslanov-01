import formatDistanceToNow from 'date-fns/formatDistanceToNow'


export function getDate(dateInfo) {
    return formatDistanceToNow(new Date(dateInfo)) 
}
