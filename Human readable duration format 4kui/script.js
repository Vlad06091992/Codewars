function formatDuration(seconds) {
    if (seconds <= 0) {
        return 'now'
    } 
    if(seconds == 1){
        return '1 second'
    } else {
        let string = ''

        getAnswer(seconds)
        function getAnswer(seconds) {

            let res

            let second = {
                name: 'second',
                names: 'seconds',
                value: 1
            }
            let minute = {
                name: 'minute',
                names: 'minutes',
                value: 60
            }
            let hour = {
                name: 'hour',
                names: 'hours',
                value: 3600
            }
            let day = {
                name: 'day',
                names: 'days',
                value: 86400
            }



            let times = [second, minute, hour, day]

            for (let i = times.length - 1; i >= 0; i--) {
                if (seconds > times[i].value) {
                    res = times[i]
                    break
                }

            }
            let rs = parseInt(seconds / res.value)
            rs > 1 ? string += (rs + ' ' + res.names + ',' + ' ') : string += (rs + ' ' + res.name + ',' + ' ')
            let nextIteration = seconds % res.value
            if (nextIteration !== 0) {
                getAnswer(nextIteration)
            }

        }

        string = string.slice(0, string.length - 2)

        if (string.indexOf(',') > 0) {
            let lIndex = string.lastIndexOf(",");
            string = string.substring(0, lIndex) + " and" + string.substr(lIndex + 1);
            console.log(string);
        }
        return string
    }
}



console.log(formatDuration(504594))