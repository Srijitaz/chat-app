export function time(dateString){
    const data = new Date(dateString);
    const hours = padZero(data.getHours());
    const mins = padZero(data.getMinutes());
    return `${hours}:${mins}`;
}

function padZero(number){
    return number.toString().padStart(2, "0");
}