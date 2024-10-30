import React from 'react'

export default function Icons(icon) {
    switch (icon) {
        case '01d':
            icon = '/images/weather/01d.png'
            console.log('clear sky');
            break;
        case '01n':
            icon = '/images/weather/01n.png'
            console.log('clear sky');
            break;
        case '02d':
            icon = '/images/weather/02d.png'
            console.log('few clouds');
            break;
        case '02n':
            icon = '/images/weather/02n.png'
            console.log('few clouds');
            break;

        case '03d':
            icon = '/images/weather/03d.png'
            console.log('scattered clouds');
            break;
        case '03n':
            icon = '/images/weather/03n.png'
            console.log('scattered clouds');
            break;
        case '04d':
            icon = '/images/weather/04d.png'
            console.log('broken clouds');
            break;
        case '04n':
            icon = '/images/weather/04n.png'
            console.log('broken clouds');
            break;
        case '09d':
            icon = '/images/weather/09d.png'
            console.log('shower rain');
            break;
        case '09n':
            icon = '/images/weather/09n.png'
            console.log('shower rain');
            break;
        case '10d':
            icon = '/images/weather/10d.png'
            console.log('rain');
            break;
        case '10n':
            icon = '/images/weather/10n.png'
            console.log('rain');
            break;
        case '11d':
            icon = '/images/weather/11d.png'
            console.log('thunderstorm');
            break;
        case '11n':
            icon = '/images/weather/11n.png'
            console.log('thunderstorm');
            break;
        case '13d':
            icon = '/images/weather/13d.png'
            console.log('snow');
            break;
        case '13n':
            icon = '/images/weather/13n.png'
            console.log('snow');
            break;
        case '50n':
            icon = '/images/weather/50n.png'
            console.log('mist');
            break;
    }
    return icon;
}
