import moment from 'moment'
function UTC(number) {
    
    const UTC = new Date(number * 1000).toISOString().slice(0, 19).replace('T', ' ');
    const formatoUTC = moment(UTC).utcOffset(-5).format('YYYY-MM-DD HH:mm:ss')
    const now = moment().utcOffset(-5).format('YYYY-MM-DD HH:mm:ss')
    const expiration = moment(formatoUTC);

    //Get Diferent Duration
    const diff = expiration.diff(now);
    const diffDuration = moment.duration(diff);

    //Display
    const days = diffDuration.minutes()
    const hours = diffDuration.minutes()
    const min = diffDuration.minutes()

    //Return
    return min.toString().slice(1)
}
export default UTC;