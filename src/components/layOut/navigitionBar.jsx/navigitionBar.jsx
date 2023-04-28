import { useSelector } from "react-redux"
import { navigitionBarContentIsAuth, navigitionBarContentIsNotAuth } from "../../../utiels/contents"
import { ButtonNavigition } from "./components"

function NavigitionBar() {
    const isAuth = useSelector(state => state.weblog.auth)
    return (
        <section
            id="bottom-navigation"
            className="fixed inset-x-0 bottom-0 z-10 block m-4 bg-white rounded-full shadow dark:bg-black dark:text-white lg:hidden bottom-navigation"
        >
            <div id="tabs" className="flex justify-between ">
                {
                    isAuth ?
                        navigitionBarContentIsAuth.map((item => <ButtonNavigition key={item.id} {...item} />)) :
                        navigitionBarContentIsNotAuth.map((item => <ButtonNavigition key={item.id}  {...item} />))

                }

            </div>
        </section>

    )
}

export default NavigitionBar