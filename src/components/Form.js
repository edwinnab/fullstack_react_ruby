import { useState } from "react"
import "../css/Form.css"


function Form() {
    let [formData, setFormData] = useState({
        name: '',
        email: "",
        phone: ""
    })

    function dataFetch (event) {
        event.preventDefault()
        setFormData({...formData, 
            [event.target.id]: event.target.value,
        })
    }

    function handleSubmit() {
        fetch("http://127.0.0.1:9292/students", {
            method: "POST",
            headers: {
                "Content-Type": "Application/Json"
            },
            body: JSON.stringify(formData)
        })

    }
    return (
        <>
        <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" 
                className="form-control" 
                id="name" 
                value={formData.name}
                onChange={dataFetch}
                required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="text" 
                className="form-control" 
                id="email" 
                value={formData.email}
                onChange={dataFetch}
                required/>
            </div>
            <button type="submit" className="btn">Submit</button>
            </form>
        </>
    )
}
export default Form