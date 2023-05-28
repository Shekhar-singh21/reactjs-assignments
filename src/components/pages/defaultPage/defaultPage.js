import AdminIcon from "../../molecules/adminicon/adminIcon";
import StudentIcon from "../../molecules/studenticon/studentIcon";
import style from './default.module.css'


export default function DefaultPage() {


    return (
        <>
        <h1>Online Examination</h1>
        <div className={style.DefaultPage}>
            <div className={style.adminoption}>

                <AdminIcon />
            </div>
            <div className={style.studentoption}>

                <StudentIcon />
            </div>


        </div>
        </>
    )
}