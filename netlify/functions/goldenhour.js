const SunCalc = require('suncalc');

exports.handler = async function(event) {
    const {lat, long, alt = 0} = event.queryStringParameters;

    if (!lat || !long) {
        return {
            statusCode: 422,
            body: JSON.stringify({message: 'Latitude or longitude missing.'})
        }
    }

    const sunTimes = SunCalc.getTimes(new Date(), lat, long, alt);

    return {
        statusCode: 200,
        body: JSON.stringify(sunTimes.goldenHour)
    };
}
