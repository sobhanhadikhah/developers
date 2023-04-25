import * as yup from "yup";
export const postValiditionSchema = yup.object().shape({
    title: yup.string().min(3).required(),
    description: yup.string().min(5).max(600).required(),
/*     tags: yup.mixed()
      .required()
      .oneOf(["React", "daily"])
      .label("Selected Tags") */
})

export const postIntialValue = {
    title:"",
    description:"",
    
}