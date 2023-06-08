import { useEffect, useState } from "react";

function Table() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:9292/students")
        .then((r) => r.json())
        .then((data) => {
            setStudents(data)
        })
    }, [])

    // function deleteRecord() {
    //   fetch(`http://localhost:3002/student-data/${1}`, {
    //         method: "DELETE",
    //     })
    //     .then((r) => r.json())
    //     .then((data) => console.log(data))
    // }
    return (
        <>
        <table className="table table-dark mt-4">
        <thead>
            <tr>
            <th scope="col">Student-id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student)=> (
                <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td><button className="btn" onClick={() => {
                    fetch(`http://127.0.0.1:9292/students/${student.id}`, {
                        method:"DELETE", 
                    }).then((r) => r.json())
                    .then((data) => console.log(data))
                }}>Delete</button></td>
                </tr>
            ))}
        </tbody>
        </table>
        </>
    )
}

export default Table;