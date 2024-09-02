import InputField from "../InputField/InputField.jsx";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
const  NewProject = forwardRef( (props, ref) => {
    const modalRef = useRef()

    const [inputData , setInputData]= useState({
        title: "",
        description:"",
        dueDate: "",
    })
    useImperativeHandle(ref , () => {
        return {
            trigger(){
                modalRef.current.open = true;
            }
        }
    })

    function handleTitleChange(event){
        setInputData( (prevState) => ( {
            ...prevState ,
            title: event.target.value
        }) )
    }
    function handleDescriptionChange(event){
        setInputData( (prevState) => ( {
            ...prevState ,
            description: event.target.value
        }) )
    }
    function handleDueDateChange(event){
        setInputData( (prevState) => ( {
            ...prevState ,
            dueDate: event.target.value
        }) )
    }

    function handleSave(){
        modalRef.current.open = false;
        setInputData(undefined)

    }
    function handleClose(){
        modalRef.current.open = false;
    }


    return (
        <dialog ref={modalRef} className={"w-[35rem] mt-16 backdrop:bg-stone-900/90 bg-stone-900 p-4 rounded-md shadow-md"} >
            <h2 className={"text-xl font-bold text-stone-200 my-4"}>
                New Project
            </h2>
            <InputField textArea={false}  label={"title"} inputName={"title"} onChange={handleTitleChange} fieldValue={inputData ? inputData.title : ""}/>
            <InputField textArea={true}  label={"description"} inputName={"description"} onChange={handleDescriptionChange} fieldValue={inputData ? inputData.description : ""}/>
            <InputField textArea={false}  label={"due-date"} inputName={"duedate"} onChange={handleDueDateChange} fieldValue={inputData ? inputData.dueDate : ""}/>
            <menu className={"flex items-center justify-end gap-4 my-4"}>
                <li className="flex justify-between my-4">
                    <button onClick={handleSave} className={"px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"}>
                        Save
                    </button>
                </li>
                <li className="flex justify-between my-4">
                    <button onClick={handleClose} className={"px-6 py-2 rounded-md bg-stone-200 text-stone-900 hover:bg-stone-950 hover:text-stone-50 "}>
                        Cancel
                    </button>
                </li>
            </menu>
        </dialog>
    )
} )
export default NewProject;