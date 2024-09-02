

const InputField = ( {textArea = false , label , inputName , onChange , fieldValue} ) => {


    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return (
        <p className="text-stone-800 my-4">
            <label htmlFor="" className={"text-sm font-bold uppercase text-stone-500"}>
                {label}
            </label>
            {textArea === true && <textarea  required={true} className={classes} onChange={onChange} value={fieldValue} name={inputName} />}
            {textArea !== true && <input
                name={inputName}
                className={classes}
                onChange={onChange}
                value={fieldValue}
                required={true}
            />
            }
        </p>
    )
}
export default InputField;



