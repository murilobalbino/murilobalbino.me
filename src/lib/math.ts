export function differenceBetweenDates(date1: any, date2: any) {
    const diff = Math.abs(date1 - date2)

    const seconds = Math.floor(diff / 1000) % 60
    const minutes = Math.floor(diff / (1000 * 60)) % 60
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))

    let result = ''
    if (seconds > 0) result = `${seconds} segundo${seconds !== 1 ? 's' : ''}`
    if (minutes > 0) result = `${minutes} minuto${minutes !== 1 ? 's' : ''}`
    if (hours > 0) result = `${hours} hora${hours !== 1 ? 's' : ''}`
    if (days > 0) result = `${days} dia${days !== 1 ? 's' : ''}`
    if (months > 0) result = `${months} mês${months !== 1 ? 'es' : ''}`
    if (years > 0) result = `${years} ano${years !== 1 ? 's' : ''}`

    return result
}
