import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

function Button(props) {

    return (
        <a 
            href={props.url}
            target="blank" 
            rel="noreferrer"
            // {props.target && (
            //     <>
            //     {`target=${props.target} rel="noreferrer"`}
            //     </>
            // )}
            className="border-2 border-teal-500 text-teal-600 rounded-full px-6 py-2 text-lg font-bold  uppercase leading-none hover:bg-teal-500 hover:text-white transition"
        >

            <span className="relative top-[-1px]">{props.text}</span>
            <ArrowLongRightIcon className="w-8 h-8 inline-block ml-2 relative top-[-3px]" />

        </a>

    )
}

export default Button