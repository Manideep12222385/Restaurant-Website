import React from "react";
import { useNavigate } from "react-router";
import styles from "./Directtodeal.module.css";
const Directtodeal = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <div style={{ width: "30%" }}></div>

      <div className={styles.splitbet}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.dist}>
          <div className={styles.dist}>
            <h4 className={styles.h2}>OFFERS & DEALS</h4>
          </div>

          <p onClick={()=>navigate("/deals")} className={styles.cardnamesp}>View All Menu </p>
        </div>
        <div className={styles.card}>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <h1 className={`${styles.offer} offer`}> 1 PC Free Double ka meetha</h1>
            <div className={styles.btpar}>
              <p>View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXRsaWFuJTIwcGl6emF8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <h1 className={`${styles.offer} offer`}> 1 Free Cool Drink</h1>
            <div className={styles.btpar}>
              <p>View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpbWl0ZWQlMjB0aW1lfGVufDB8fDB8fHww"
              alt=""
            />
            <h1 className={`${styles.offer} offer`}>Free Delivery</h1>
            <div className={styles.btpar}>
              <p >View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directtodeal;
