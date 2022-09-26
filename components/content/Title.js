import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components'

import { ArrowDownIcon, CameraIcon, XMarkIcon } from '@heroicons/react/24/solid'
// import { Popover, Transition } from '@headlessui/react'
import InfoPop from "./InfoPop";

const Banner = styled(ParallaxBanner)`
    height: 100vh;
`;

// const Banner = styled.div`
//     height: 100vh;
//     background-image: url(${props => props.bgImage});
//     background-size: cover;
//     background-repeat: no-repeat;
// `

const HeadlineBase = styled.h1`
    color: #fff;
    text-shadow: 0 8px 33px rgba(0,0,0,0.25);
    font-size: 220px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-bottom: 150px;
`;

const ScrollIndicator = styled(Parallax)``;

/* 
speed={##} 
translateX={['50px','-50px']}
rotate={[0, 360]
*/




function Title(props) {

    const bgImageData = props.data;

    const bgImage = bgImageData.url + '&q=80&w=1400';
  
    return (
        <Banner
        // bgImage={bgImage}
        layers={[{ image: bgImage, speed: -15 }]}
        className="pt-16 h-full"
        >
            <div className="relative flex flex-col items-center justify-around ">
                <HeadlineBase>
                    NATIONAL PARKS
                </HeadlineBase>
                <ScrollIndicator 
                    speed={-4}
                    className="text-white bg-white bg-opacity-20 border-2 border-white rounded-full p-6 font-bold text-xl shadow-lg"
                >
                    <ArrowDownIcon className="h-8 w-8" />
                </ScrollIndicator>
            </div>



        <InfoPop 
            title={"Zion National Park, Utah" }
            creditUrl={bgImageData.creditUrl} 
            creditName={bgImageData.creditName} 
        />


            {/* {bgImageData.creditName && (
                <CreditLink 
                    href={bgImageData.creditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 left-4 flex items-center text-xs bg-white bg-opacity-80 border border-white hover:bg-opacity-100 px-3 py-1 rounded-full transition"
                >
                    <CameraIcon className="w-4 h-4 mr-2 inline-block"/><span>Photo by <strong>{bgImageData.creditName}</strong></span>
                </CreditLink>
            )} */}

        </Banner>
    )
}

export default Title;
  