
import "./Spinner.css";
const Spinner =()=>{
    return(
        <div className="flex flex-col justify-center items-center w-screen h-[80vh]">
        <div className="spinner"></div>
        <div>Loading...</div>
        </div>
    )
}
 export default Spinner;