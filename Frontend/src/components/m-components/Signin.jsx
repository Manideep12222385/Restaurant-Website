import React, { useState ,} from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Signin.module.css";

import Register from "./firebaseVerification/register";


export const Signin =()=>{
const navigator=useNavigate()

const [number,setnumber]=useState("")
let handlechange=(e)=>{
    setnumber(e.target.value)
    console.log(e.target.value)}

    let sendmecode=()=>{
        console.log(number)
        localStorage.setItem("number",JSON.stringify(number))
        navigator("/Otp")
    }


return(
    <div id={styles.centre}>
        <div className={styles.header}>Sign In / Sign up
        
        
        </div>
        <div className={styles.logo}><img className={styles.logoimg} src="/ntech-services.png"
                 alt="noimg" /></div>
        <div className={styles.siocawp}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</div>
            <Register />               
        <div className={styles.privacypolicy}>By “logging in to Kanishka Dhaba”, you agree to our 
            <a href="" cls><b> Privacy Policy </b></a>
             and 
             <a href=""><b> Terms & Conditions</b></a>
             .</div>

             <div className={styles.btnDiv}>
            
        </div> 
        <div className={styles.orDiv}>
                <div className={styles.orLeft}></div>
                <div className={styles.orCenter}>or</div>
                <div className={styles.orRight}></div>

            </div>

            <div className={styles.skipBtnDiv}>
                <button className={styles.skipBtn} id="skipBtn" >Skip, Continue As Guest</button>
            </div>   
   
    </div>


)


}