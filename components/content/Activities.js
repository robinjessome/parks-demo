import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faBinoculars, faCampground, faFish, faMoon, faPersonHiking, faPersonSkiing, faShip } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'


function Activities(props) {

    // console.log(props.data);

    let hrColor = null
    let textColor = '';
    if ( props.hrColor ) {
        hrColor = props.hrColor
    }
    if ( props.textColor ) {
        textColor = props.textColor
    }

    let maxWidth = 'max-w-[500px]';
    let align = 'justify-center';
    if (props.align == 'right') {
        align = 'justify-end'
        maxWidth = null
    } else if (props.align == 'left') {
        align = 'justify-start'
        maxWidth = null
    }

    return (
        <div className={`font-sans mx-auto ${maxWidth}`}>
            <hr className={`my-6 ${hrColor}`} />
            <ul className={`flex gap-2 ${align}`}>
            {props.data.map((activity, i) => {
                let showActivity = false
                let label = null
                let icon = null

                switch (activity.name) {

                    case 'Astronomy':
                        label = activity.name
                        showActivity = true
                        icon = faMoon
                    break;

                    case 'Biking':
                        label = activity.name
                        showActivity = true
                        icon = faBicycle
                    break;

                    case 'Birdwatching':
                        label = activity.name
                        showActivity = true
                        icon = faBinoculars
                    break;
    
                    case 'Boating':
                        label = activity.name
                        showActivity = true
                        icon = faShip
                    break;

                    case 'Camping':
                        label = activity.name
                        showActivity = true
                        icon = faCampground
                    break;

                    case 'Fishing':
                        label = activity.name
                        showActivity = true
                        icon = faFish
                    break;

                    case 'Hiking':
                        label = activity.name
                        showActivity = true
                        icon = faPersonHiking
                    break;

                    case 'Skiing':
                        label = activity.name
                        showActivity = true
                        icon = faPersonSkiing
                    break;
                    

                }
                if(showActivity) {
                    return (
                        <li 
                            key={`activity-${i}`}
                            className={`${textColor} p-2 text-xs rounded-lg flex flex-col items-center`}
                        >
                            <FontAwesomeIcon icon={icon} className="w-6 h-6" />
                            <span className="opacity-70">{label}</span>
                        
                        </li>
                    )
                }
            })}
            </ul>
        </div>
    )
}

export default Activities;