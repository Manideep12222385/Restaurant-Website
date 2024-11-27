// import Skeleton from 'react-loading-skeleton'

// const CardSkeleton=({cards})=>{
//     return Array(cards)
//     .fill(0)
//     .map((item)=>(
//         <div className="card—skeleton">
//         <div className="left—col">
//             <Skeleton circle width={40 } height={40}/>
//         </div>
//         <div className="right-col">
//             <Skeleton count={4}     style={{"marginBottom": "0.6rem"}} />
//         </div>
//         </div>
//     ))
// }
// export default CardSkeleton;
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './CardSkeleton.module.css';

const CardSkeleton = ({ cards = 1 }) => {
  return (
    <div className={styles.skeletonContainer}>
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={styles.skeletonCard}
            style={{
              boxShadow: "10px 10px 19px rgba(0, 0, 0, 0.3)",
              margin: "20px",
              borderRadius: "35px",
              padding: "20px",
              width: "380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Image Skeleton */}
            <Skeleton
              height={180}
              width={340}
              style={{ borderRadius: "25px", marginBottom: "20px" }}
            />

            {/* Title Skeleton */}
            <Skeleton
              height={25}
              width="60%"
              style={{ marginBottom: "10px" }}
            />

            {/* Price Skeleton */}
            <Skeleton
              height={20}
              width="40%"
              style={{ marginBottom: "10px" }}
            />

            {/* Description Skeleton */}
            <Skeleton
              count={2}
              height={15}
              width="80%"
              style={{ marginBottom: "10px" }}
            />

            {/* Button Skeleton */}
            <Skeleton
              height={40}
              width="50%"
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
    </div>
  );
};

export default CardSkeleton;
