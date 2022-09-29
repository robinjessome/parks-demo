import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import InfoPop from "./InfoPop";

const Banner = styled(ParallaxBanner)`
    height: 100vh;
`;

const HeadlineBase = styled.h1`
    color: #fff;
    text-shadow: 0 8px 33px rgba(0,0,0,0.25);
    font-weight: 700;
    line-height: 0.9;
    text-align: center;
    width: 100%;
    margin-bottom: 150px;
    max-width: 1200px;
`;

const ScrollIndicator = styled(Parallax)``;

function Title(props) {

    const bgImageData = props.data;

    const bgImage = bgImageData.url + '&q=80&w=1400';
  
    return (
        <Banner
            layers={[{ image: bgImage, speed: -15 }]}
            className="pt-16 h-full"
        >
            <div className="relative flex flex-col items-center justify-around h-full">
                <HeadlineBase
                    className="text-[60px] md:text-[160px] xl:text-[220px]"
                >
                    NATIONAL PARKS
                </HeadlineBase>
                <ScrollIndicator 
                    speed={-4}
                    className="text-white bg-white bg-opacity-20 border-2 border-white rounded-full w-16 h-16 lg:w-24 lg:h-24 font-bold text-xl shadow-lg flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6 lg:w-8 lg:h-8" />
                </ScrollIndicator>
            </div>

            <InfoPop 
                title={bgImageData.alt}
                creditUrl={bgImageData.creditUrl} 
                creditName={bgImageData.creditName} 
            />

        </Banner>
    )
}

export default Title;
  