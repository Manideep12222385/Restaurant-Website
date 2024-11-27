// import React from "react";
// import styles from "./welcome.module.css";

// const Welcome = () => {
//   return (
//     <div className={styles.main}>
//       <div className={styles.m1}>
//         <div className={styles.lines}>
//           <div className={styles.line}></div>
//           <div className={styles.line}></div>
//           <div className={styles.line}></div>
//         </div>
//         <p className={styles.h2t}>WELCOME TO KANISHKA DHABA!</p>
//         <p className={styles.h2t}></p>
//       </div>
//       <div className={styles.m2}></div>
//     </div>
//   );
// };

// export default Welcome;
import React, { useEffect, useState } from "react";
import styles from "./welcome.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth

const Welcome = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, retrieve the display name or email
        setUserName(user.displayName || user.email);
      } else {
        setUserName(""); // User is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.m1}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <p className={styles.h2t}>WELCOME TO KANISHKA DHABA!</p>
        {/* Display user name if available */}
        {userName && <p className={styles.h2u}>Hello, {userName}</p>}
      </div>
      
    </div>
  );
};

export default Welcome;
