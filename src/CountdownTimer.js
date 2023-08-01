import React, { useState } from 'react'
import DateTimeDisplay from './DateTimeDisplays';
import {useCountdown} from './hooks/useCountdown';

const ExpiredNotice =({onImageClick}) =>{

    return(
        <div className='expired-notice'>
            <img src="https://cdn.pixabay.com/photo/2016/12/09/03/59/present-1893639_1280.jpg" height ="300" width="400" onClick={onImageClick} />
        </div>
    )
    
}

const ShowDown = () =>{
    return(
        <div className='expired-notice'>
            {/* <span> Expired </span> */}
            <img src= "https://cdn.pixabay.com/photo/2019/10/09/06/06/gift-4536515_1280.png" height="200" width="200"></img>
        </div>
    )
}

const ShowCounter = ({minutes, seconds}) =>{
    return(
        <div className='show-counter'>
            <a href='https://cdn.pixabay.com/photo/2019/10/09/06/06/gift-4536515_1280.png' target= "_blank" rel='noopener noreferrer' className='countdown-link'>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </a>
        </div>
    )
}

const CountdownTimer = ({targetDate}) =>{
    const [minutes, seconds] = useCountdown(targetDate);
    const [showDown, setShowDown] = useState(false);

    const handleImageClick = () =>{
        setShowDown(true);
    }

    if(showDown){
        return <ShowDown />
    }else if(minutes + seconds <= 0){
        return <ExpiredNotice onImageClick={handleImageClick}/>;
    }else{
        return(
            <ShowCounter minutes={minutes} seconds={seconds} />
        )
    }
}

export default CountdownTimer;