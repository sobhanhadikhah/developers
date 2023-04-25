import { Formik, Field, ErrorMessage, Form, } from "formik"
import { InputTitle, TextArea } from "./components";
import { postIntialValue, postValiditionSchema } from "../../schema/postValidition";
import { useNavigate } from "react-router-dom";
import sendPost from "../../services/makePost";
import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

function CreatePost() {
    const animatedComponents = makeAnimated();
    const options = [
        {
            label: "#Apple",
            value: "apple",
        },
        {
            label: "#Mango",
            value: "mango",
        },
        {
            label: "#Banana",
            value: "banana",
        },
        {
            label: "#Pineapple",
            value: "#pineapple",
        },
    ]
    const navigate = useNavigate();
    const [loadingBTN, setLoadingBTN] = useState(false)
    async function handleonSubmite(data,) {
        try {
            setLoadingBTN(true)
            console.log(data);
            /* for sending documents to firebase data base */
            sendPost(data)
            setTimeout(() => {
                navigate("/")
                toast.success("Posted")
            }, 4000);

        } catch (error) {
            console.log("error");
            setLoadingBTN(false)
            toast.error("Somthing wrong")
        }
    }
    const submitButton = `bg-[#1877F2] w-fit rounded-full
        py-2 px-8 ${loadingBTN ? "cursor-not-allowed" : "cursor-pointer"}  active:scale-95shadow-md
        text-white text-xs duration-300 active:bg-opacity-80
        ease-in-out font-medium md:text-sm`;
    return (
        <section className="h-screen max-w-2xl mx-auto font-mono   " >
            <div className="flex flex-col m-6" >
                <div className="flex items-center py-8 text-xl lg:text-xl" >
                    <h1>Say Somthing to Developers!!!</h1>
                </div>
                <Formik
                    initialValues={postIntialValue}
                    validationSchema={postValiditionSchema}
                    onSubmit={handleonSubmite}
                >
                    {(formik) => {
                        return (
                            <form
                                onSubmit={formik.handleSubmit}
                                className="flex flex-col gap-4 "
                            >
                                {/* Errors */}
                                <ErrorMessage name="title">
                                    {msg =>
                                        <span className="text-sm text-red-400 capitalize">
                                            {msg}
                                        </span>}
                                </ErrorMessage>
                                <ErrorMessage name="description">
                                    {msg => <span
                                        className="text-sm text-red-400 capitalize">
                                        {msg}
                                    </span>}
                                </ErrorMessage>
                                {/* input */}
                                <Field
                                    component={InputTitle}
                                    name="title"
                                    id="title"
                                />
                                {/* textArea */}
                                <Field
                                    component={TextArea}
                                    name="description"
                                    id="description"
                                />
                                {/* tags input */}
                                {/* <Field
                                    name="tags"
                                    id="tags"
                                    component={
                                        <Select
                                            isMulti
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            options={options}

                                        />}
                                /> */}

                                {/* submit button */}
                                <button
                                    disabled={formik.isValidating || loadingBTN}
                                    type="submit"
                                    className={submitButton}
                                >
                                    {loadingBTN ? <div className="w-5 h-5 border-l-2 border-white rounded-full animate-spin" /> : "Post"}
                                </button>
                            </form>
                        )
                    }}
                </Formik>
            </div>
            <div  >
            </div>
        </section >
    );
}

export default CreatePost;
