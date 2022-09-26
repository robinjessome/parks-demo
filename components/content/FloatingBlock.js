import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components'

const Block = styled(Parallax)``;

// const Block = styled.div``;


function FloatingBlock(props) {

    return (
        <section>
            <Block 
                className="w-[94%] md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg mx-auto p-8 text-xl font-serif -translate-y-10"
                speed={12}
                // startScroll={0}
                // endScroll={800} 
            >
                {props.children}
            </Block>
        </section>

    )

}

export default FloatingBlock;