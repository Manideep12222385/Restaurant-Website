import React, { useEffect, useState } from "react";

import styles from "./Otp.module.css";
import { useNavigate } from "react-router-dom";
import Register from "./firebaseVerification/register";
import Login from "./firebaseVerification/login";


export const Otp =()=>{
  const navigate = useNavigate();

//  localStorage.setItem("signed", 0)
//    let phone=JSON.parse(localStorage.getItem("number"))
//    const [sec,setsec]=useState(180)
//    const navigator=useNavigate()

//    useEffect(()=>{
//     const timer = setInterval(() => {
//         setsec(prevSec => {
//           if (prevSec === 0) {
//             navigator("/Signin");
//             return 180;
//           }
//           return prevSec - 1;
//         });
//       }, 1000);
    
//       // Clean up the interval when the component unmounts
//       return () => clearInterval(timer);

    
//    },[sec])

  //  const handleOtp =()=>{
  //   localStorage.setItem("signed", 1)
  //   navigate("/")
  //  }

return(
    <div id={styles.centre}>
        <div className={styles.header}>Sign In / Sign up</div>
        <div className={styles.logoimg}><img src="/ntech-services.png" alt="noimg" /></div>
        <Login />
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
                <button className={styles.skipBtn} id="skipBtn" onClick={navigate("/")}>Skip, Continue As Guest</button>
            </div>   
   
    </div>


)


}
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase"; // adjust path if needed
// import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
// import styles from "./Otp.module.css";
// // import logo from "../../../public/7697984.png"

// export const Otp = () => {
//   const navigate = useNavigate();
//   const [sec, setSec] = useState(180);
//   const [verificationId, setVerificationId] = useState(null);
//   const [otp, setOtp] = useState("");
//   const phone = JSON.parse(localStorage.getItem("number"));

//   useEffect(() => {
//     // Send OTP when component mounts
//     sendOtp();

//     // Timer to count down for OTP expiration
//     const timer = setInterval(() => {
//       setSec((prevSec) => {
//         if (prevSec === 0) {
//           navigate("/Signin"); // Redirect if time runs out
//           return 180; // Reset timer if needed
//         }
//         return prevSec - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer); // Clear interval on unmount
//   }, []);

//   // Send OTP to the phone number
//   const sendOtp = () => {
//     const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
//       size: "invisible",
//     }, auth);
  
//     signInWithPhoneNumber(auth, phone, recaptchaVerifier)
//       .then((confirmationResult) => {
//         setVerificationId(confirmationResult.verificationId);
//       })
//       .catch((error) => {
//         console.error("Error sending OTP:", error);
//       });
//   };
  

//   // Handle OTP verification
//   const handleOtpSubmit = () => {
//     const credential = PhoneAuthProvider.credential(
//         verificationId,
//         otp
//     );

//     signInWithCredential(auth, credential)
//         .then(() => {
//             localStorage.setItem("signed", 1); // Mark as signed in
//             navigate("/"); // Redirect on success
//         })
//         .catch((error) => {
//             console.error("Error verifying OTP:", error);
//         });
// };

//   return (
//     <div id={styles.centre}>
//       <div className={styles.header}>Sign In / Sign up</div>
//       <div className={styles.logoimg}>
//         <img
//           src="/7697984.png"
//           alt="noimg"
//         />
//       </div>
//       <div className={styles.siocawp}>WE JUST TEXTED YOU</div>

//       <div className={styles.displayPhoneNumber}>
//         Please enter the verification code we just sent to {phone}
//       </div>
//       <div className={styles.differentNumber}>Different number?</div>

//       <input
//         className={styles.otp}
//         id="phone"
//         type="number"
//         placeholder="OTP*"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />

//       <div className={styles.displayPhoneNumber}>
//         Your code will expire in {sec} sec
//       </div>
//       <div className={styles.differentNumber} onClick={sendOtp}>
//         Resend the Code
//       </div>

//       <div className={styles.skipBtnDiv}>
//         <button onClick={handleOtpSubmit} className={styles.skipBtn} id="skipBtn">
//           Submit
//         </button>
//       </div>

//       {/* Invisible recaptcha container */}
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };
