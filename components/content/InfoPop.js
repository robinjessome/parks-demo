import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'

function InfoPop(props) {
    return (
        <Popover className="text-xs absolute bottom-4 left-4">
        {({ open }) => (
          <>
            <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                    static
                    className="mb-2 p-4 w-[250px] bg-white shadow-lg rounded-lg text-left text-slate-900"
                >
                  {props.title && (
                    <>
                      <p className="text-xl">{props.title}</p>
                      <hr className="my-3" />
                    </>
                  )}
                    <p>Photo by <a href={`${props.creditUrl}?utm_source=rj_parks&utm_medium=referral`} target="blank" rel="noreferrer" className=" hover:underline font-bold">{props.creditName}</a>.</p>
                </Popover.Panel>
              </Transition>
    
              <Popover.Button
                className={`text-slate-900 flex items-center bg-white border border-white border-opacity-50  hover:bg-opacity-100 px-3 py-1 rounded-full hover:shadow-xl transition ${open ? "bg-opacity-100 shadow-xl" : "shadow bg-opacity-40"}`}
               >
                {!open && (
                    <>
                        <FontAwesomeIcon icon={faCamera} className="w-4 h-4 inline-block mr-2" /> Info
                    </>
                )}
                {open && <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />}    
            </Popover.Button>
          </>
        )}
      </Popover> 
    )
}

export default InfoPop