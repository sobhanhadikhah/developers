import React from 'react'

function NavigitionBar() {
    return (
        <section
            id="bottom-navigation"
            className="fixed inset-x-0 bottom-0 z-10 block bg-white shadow dark:bg-black dark:text-white lg:hidden bottom-navigation"
        >
            <div id="tabs" className="flex justify-between">
                <a
                    href="#"
                    className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-teal-500 hover:text-teal-500"
                >

                    <span className="block text-xs tab tab-home">Home</span>
                </a>

            </div>
        </section>

    )
}

export default NavigitionBar