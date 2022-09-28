import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components'
import Image from 'next/image'
import InfoPop from "./InfoPop";

const MainGridImage = styled(ParallaxBanner)``

// const Block = styled(Parallax)``;

// const Block = styled.div``;


function Grid(props) {

    return (
        <section className="lg:grid grid-rows-6 grid-cols-2 grid-flow-col lg:max-h-full">

        <div className="row-span-6 h-screen lg:h-full">
            <MainGridImage
                    layers={[{ image: props.data[0].url+'&q=80&w=800', speed: -14 }]}
                    className="h-full"
                    >

                    <InfoPop 
                        title={props.data[0].alt} 
                        creditUrl={props.data[0].creditUrl} 
                        creditName={props.data[0].creditName} 
                    />

            </MainGridImage>
            </div>


            <div className="relative row-span-3 h-[400px] lg:h-auto">
                <Image
                    alt={props.data[1].alt}
                    src={`${props.data[1].url}&q=80&w=800`}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={`${props.data[1].url}&q=20&w=40`}
                />
                <InfoPop 
                    title={props.data[1].alt} 
                    creditUrl={props.data[1].creditUrl} 
                    creditName={props.data[1].creditName} 
                />
            </div>





            <div className="row-span-1 p-12 flex items-center w-full overflow-hidden">
                <Parallax
                translateX={[80, 0, 'easeOutBack']}
                className="hidden md:block max-w-lg lg:max-w-full mx-auto text-center lg:text-left font-serif text-2xl lg:text-4xl px-8 lg:pr-24 lg:pl-12"
                >
                    {props.children}
                </Parallax>
                <div className="md:hidden max-w-lg mx-auto text-center font-serif text-2xl px-4">
                    {props.children}
                </div>
            </div>


            <div className="relative row-span-2 md:grid grid-cols-2 min-h-[400px]">
                <div className="relative h-[300px] md:h-auto">
                    <Image
                        alt={props.data[2].alt}
                        src={`${props.data[2].url}&q=90&w=400`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${props.data[2].url}&q=20&w=40`}
                    />
                <InfoPop 
                    title={props.data[2].alt} 
                    creditUrl={props.data[2].creditUrl} 
                    creditName={props.data[2].creditName} 
                />
                </div>
                <div className="relative h-[300px] md:h-auto">                
                    <Image
                        alt={props.data[3].alt}
                        src={`${props.data[3].url}&q=90&w=400`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${props.data[3].url}&q=20&w=40`}
                    />
                    <InfoPop 
                        title={props.data[3].alt} 
                        creditUrl={props.data[3].creditUrl} 
                        creditName={props.data[3].creditName} 
                    />
                </div>
            </div>
        </section>

    )

}

export default Grid;