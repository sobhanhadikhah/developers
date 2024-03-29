import { Formik, Field, ErrorMessage, Form, } from "formik"
import { InputTitle, TextArea } from "./components";
import { postIntialValue, postValiditionSchema } from "../../schema/postValidition";
import { useNavigate } from "react-router-dom";
import sendPost from "../../services/makePost";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { useTitle } from "../../hooks/"
import fetchTags from "../../services/fetchTags";

function CreatePost() {
    //const animatedComponents = makeAnimated();

    const [tags, setTags] = useState()
    useTitle("Post");
    useEffect(() => {
        fetchTags(setTags)
        console.log(tags)
    }, [])
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
        <section className="h-screen max-w-2xl mx-auto font-mono " >
            <div className="flex flex-col pt-12 m-6 lg:pt-16" >
                <div className="flex items-center py-8 text-2xl text-center lg:text-3xl" >
                    <h1 className="font-extrabold tracking-widest uppercase dark:text-white " >
                        Say something <br />to Developers {`</>`}
                    </h1>
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
                                <ErrorMessage name="tags">
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
                                <label htmlFor="tags">tags</label>
                                <Select
                                    options={tags}
                                    isLoading={tags ? false : true}
                                    name="tags"
                                    id="tags"
                                    isSearchable={true}
                                    isMulti
                                    onChange={(options) =>
                                        formik.setFieldValue(
                                            'tags',
                                            options ? options.map((option) => option.value) : []
                                        )
                                    }
                                    onBlur={formik.handleBlur}
                                    value={tags && tags.filter((option) =>
                                        formik.values.tags.includes(option.value)
                                    )}

                                />

                                {/* submit button */}
                                <button
                                    disabled={formik.isValidating || loadingBTN}
                                    type="submit"
                                    className={submitButton}
                                >
                                    {loadingBTN ? <div className="w-5 h-5 border-l-2 border-white rounded-full animate-spin" /> : "Send"}
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
