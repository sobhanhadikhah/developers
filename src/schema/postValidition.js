import * as yup from "yup";
export const postValiditionSchema = yup.object().shape({
    title: yup.string().min(3).required(),
    description: yup.string().min(5).max(600).required(),
    tags:yup.array()
    .of(yup.string().required('Tag is required'))
    .min(1, 'At least one Tag is required'),
/*     tags: yup.mixed()
      .required()
      .oneOf(["React", "daily"])
      .label("Selected Tags") */
})

export const postIntialValue = {
    title:"",
    description:"",
    tags:[]
    
}