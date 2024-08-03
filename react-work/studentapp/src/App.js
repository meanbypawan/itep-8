import { useRef, useState } from "react";
import Data from "./Data";
export default function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","MECH"]);
  const [defaultBranch,setDefaultBranch] = useState("All");
  let rollInput = useRef();
  let nameInput = useRef();
  let branchInput = useRef();
  let mobileInput = useRef();
  const addStudent = ()=>{
    let roll = rollInput.current.value;
    let name = nameInput.current.value;
    let branch = branchInput.current.value;
    let mobile = mobileInput.current.value;
    let student = {roll,name,branch,mobile};
    setStudentList([...studentList,student]);
  }
  const deleteStudent = (roll)=>{
    if(window.confirm("Are you sure ?")){
      let index = studentList.findIndex((s)=>{ return s.roll == roll});
      studentList.splice(index,1);
      setStudentList([...studentList]);
    }
  }
  return <>
    <div className="bg-danger text-white text-center p-2">
      <small>Student app</small>
    </div>
    <div className="container mt-2 mb-2">
      <div className="row">
        <div className="col-md-6">
          <input ref={rollInput} type="text" className="form-control" placeholder="Enter roll number"/>
        </div>
        <div className="col-md-6">
          <input ref={nameInput} type="text" className="form-control" placeholder="Enter student name"/>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <select ref={branchInput} className="form-control">
            <option>Select branch</option>
            {branchList.map((branch,index)=><option key={index}>{branch}</option>)}
          </select>
        </div>
        <div className="col-md-6">
          <input ref={mobileInput} type="text" className="form-control" placeholder="Enter mobile number"/>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <button onClick={addStudent} className="btn btn-success">ADD</button>
        </div>
        <div className="col-md-6">
          <button onClick={()=>setDefaultBranch("CS")} className="btn btn-primary">CS ({studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
          <button onClick={()=>setDefaultBranch("IT")} className="btn btn-warning ml-1">IT ({studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
          <button onClick={()=>setDefaultBranch("EC")} className="btn btn-info ml-1">EC ({studentList.filter((student)=>{return student.branch=="EC"}).length})</button>
          <button onClick={()=>setDefaultBranch("MECH")} className="btn btn-dark ml-1">MECH ({studentList.filter((student)=>{return student.branch=="MECH"}).length})</button>
          <button onClick={()=>setDefaultBranch("All")} className="btn btn-secondary ml-1">Total ({studentList.length})</button>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Roll number</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {studentList.filter((obj)=>{return obj.branch == defaultBranch || defaultBranch=="All"}).map((student,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.branch}</td>
            <td>{student.mobile}</td>
            <td>
              <button onClick={()=>deleteStudent(obj.roll)} className="btn btn-danger">Delete</button>
            </td>
          </tr>)}         
        </tbody>
      </table>
    </div>
  </>
}