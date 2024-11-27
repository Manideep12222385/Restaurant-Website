import React from "react";
import { useNavigate } from "react-router";
import styles from "./browsecat.module.css";
const Browsecat = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.forheadrow}>
        <h1 className={styles.head}>BROWSE CATEGORIES</h1>
        <div className={styles.lineoggray}></div>
      </div>
      <div className={styles.cardcontain}>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1478749485505-2a903a729c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Soups"
          />
          <p className={styles.cardname}>Soups</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1702705497146-bbde3336a801?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Starters"
          />
          <p className={styles.cardname}>Starters</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chinese"
          />
          <p className={styles.cardname}>Chinese</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.pexels.com/photos/9609868/pexels-photo-9609868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Biryanis"
          />
          <p className={styles.cardname}>Biryanis</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.pexels.com/photos/8156645/pexels-photo-8156645.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Tandoori"
          />
          <p className={styles.cardname}>Tandoori</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1532269748385-a458d8ee473e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beverages"
          />
          <p className={styles.cardname}>Beverages</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.pexels.com/photos/13350094/pexels-photo-13350094.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Stay Home Specials"
          />
          <p className={styles.cardname}>Stay Home Specials</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimagessp}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFRUWFhcYFxgYGRkVGBcaGhgYGBgVFhgZHikgGhsnHB0aITEhJSorLi4uGB8zODMsOSgtLisBCgoKDg0OGxAQGjcmICYvNSsvLzUtLzUtLS8tLTItLS0tLS0tLS0tLS0tNy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcCBAUDAQj/xABUEAACAQMCAgcDBQwFCAgHAAABAgMABBESIQUxBgcTIkFRYXGBkQgUIzKhFSUzNUJSYnOSsbPBJFOisvBDY3J0wtHS4zRUgqO0w9PhFiY2RVWDxP/EABkBAQEBAQEBAAAAAAAAAAAAAAACAQMEBf/EACURAAICAgICAgIDAQAAAAAAAAABAhESIQMxQVETMiJxQmGBM//aAAwDAQACEQMRAD8AvGlKUApSlAKUpQClKUApSlAKUrF87YAO4zk428SNjk+lAC4zpyMkZx44GATjy3HxrKvmnx8a+0ApSlAeKSOT9TC5YEkjO2NJUDOQd+ZBHlXtSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClK+E0B9pSvGeXAIBAbwyMgHwJA8PeKWKPalakt6Adt6w+6H6P21D5IrydFxSfg3GcDma8PnY32PP039ef+MVoPOScmse0Nc3zejquD2b0l0Ty2rBJ2Hjn21pvKdyAM42BOBnwycHHtwayaXyqc2V8XijrLKPMViv1idQIOMDbbz38c1yhKa+9pVfMQ+A7NK5cdwV8fdXr89PpVrlRD4pG7IxAJALEAkAYyfQZwPjWEmSp0kAkHBxqAPmRnfB8M0gl1DNeiqBsBirTs5tUfaUrzji08icbnBJO5Oc5O/ntyHurTD0pSlAKUpQClKUApSlAKUpQClKUBhLKqqWYhVUEsScAAbkknkAPGvMXke/0ibIHPeGyHOHP6Jwd+Wx8q4XWRPo4XeY5tA8Y9sg7MD4tXG484jm4iOQXg0Z9gRr2gJul0hbQHUvpD6QwLaWJCvjnpJBAPLY1Vvyh710tLdFJ0vMdQBIB0oSucc8HvDPioODjaQ8KlZb+y1EfS8NcbDAJSSBl5k8ldvjUV+UbvbWx8pyPjGT/ACoCrbDiXFFjFzbvfaELmSUdq8Q35FslCANzqA3J9MW91XdYEl+kkFwEE0YVgV2MqDCszLnZg+CcYGHGBtv1urX8U2Y2K9kdhy3d85HifP1zVV9XUHY8e7GMFVU3SMGO+kdoUAB9kfn4n2cnK7R1jHFp+zq9cfSS6hvI4Y7iWGMQrIeyfs2Ys7qdwQTyAA3xucGoZD0v4qydy6uSu2N3duZ3D4OcYwcnx5eXa66c/P1Z1IJtIx3G2DEyjGor3l2I5DP2VfEMIjARO6igKqjYALsAAPT91ZkoxWilBzk9kb6uL66msUku1YSlmwWAVnTPddlAGPEDbcAHxzUA6b9ZNy9y1rw8kBW7MMih5JXGzacg93OQAoycZzjarY4jcMsEzxr30SQqGygLKpwcnwyOdVL1B2aNLcylQZI0jCtuTiXUW5nAPcAyBnvMMmpjW5NFzvUEzS4J1kX9nOsV9rkTu9ossfZzRAkjUuwLEDBwwIPIY51cPSC+MdnPcRkFo7eWWM4yMiNmVsHw/lVX9fcJD2j8y3bAZVcgDsSE5bjOo7/nEVNZG+8GT/8Aih8TaAD7aSSdMyDayiypuA8Q4xfvIlvc3TFVzkTGNU1OCNbal8A2MZ5YAxnHb4d064jw67EHEtTx93WGAdgp2EsUinvbjJBJBwQNJ5bnyfwQ12cqRpgzucg5lwMYx5+PgOea0Ovsk3kIA52oJxnkJZT4eHifYPKr05Y0c6ajlZP+tTik9vYF7ZysjSxoGX62Gz9TxycAbb7mvbqw4rLc8OilmcvJmRSxG7BXIXfAztgZ9PPNcnrmH3rXwxNBy8O6423H+PjW31OD71Q783mPs+lYYHptn31za/A7Jv5P8JyoxzBI9Kp3pr004l91JLK3uWSPVBEigRr3pFj3LlWb6zc/Ly5Vb8NxkcjzI3BU7EjkRyyNj4g5r899YN8YOOS3AUN2U1u4UnGSsUTYwN8HGM48vfXF2TzdFmW3A+kqAFOJW0oHMSDn+j+Az79VWPwbt+wj+c9n2+n6TstXZ6v0dW+PbVe8F60zK0SLwy9AcgEqmtd+batthzztVlQyKc6TnfzJ/f4V1T9nBr0a/F+Kw2sTTzyLHGvNm5egHiSfADc04NxaG6hS4gcSROCVYZGcEggg7gggjB8qqv5Q919BFHzAdTj9Jtelx5kLG6//ALakHUUfvRF+sm/iNVElg0pSgFKUoBSlKAUpSgFKUoCJ9Z4zY9nnHaXFonxuYsj4ZridMn/pPFR5cEP966P869uvN2XhTspIKzQkEbEYcYI9+KqodZvam8e5iPaXHDjaKY8YL98CRgSNIOsk4zjHrQFp304ju+CyMQI/mt0rk8sfN4n3/Yz7qjvX1MWhtDkKO3bOTt+D29Dtkb+frUc6I9Lp+IcU4cjKEjtoXRVBJyRbsryMfMkDbwG2+5Pb6+wTb2q4zmdthuT3MAD13rnJvNI6xisGyadXGDwuz/Ury9pBqqeg8BPSJ30kgT3/AHvDIEgOPDOHGR+kPOvHo91rS2dmtqluHePWEkeQ7ZYsNcencgk7ah4V1Oo7hMrXE184JRQ0anbvyOy62XcA4A3PjqFZVXYyukjk9en4wUHBzax457fSSH48x7D51bEHT3hzosnzyFdeDpZgrKT4Mp3XHjnaqr693X7ogEHPzaPByAB35M5GO9ty3G58eVZ8H6nbuTQ08kUCMqllGp5QCBsVwFDY/SODWOKxVs2MpKTxRcvHT/Rp+X4CX2fg2qrOoA4a8UnBAg7p5j8Lq9mMDarS4nGFtZVUZCwOoHM4EZAGaq35P/O8znZYAufBSZjj47/Goj9GdZf9Inv1/Hu2eM5JnGNjnKxj253+2pU+3R/YZH3K/wD5R6e0+6or1/Du2nPnPjlz+h5knyzsB+6pZK3/AMv8v/tQ8eWbQfurf4on+cv0U50Q6WXHDQ8iQiQXCKqmTUQWjJCaCpywUHBXIO45bZknB+jt7xa8S7vx2MWwwR2RdFy3YQoTqKkZJY+Bbc179QtqjS3MpXU8SQqjMN01mUuE3OMkDfnz5ZNXMRWznT0Zx8eUbb0QDrvfHDRjG9xGOWR9WTwO1bfU6PvVD/pzfxXrW66yPuaNRIHziLkMk7Pt8M1BOhPWPJZW4s1tfnDBnMeHKt3mJKtGEY7HUeYO49tYk3DRrko8lsviqE6W6f8A4iDEAL85stQO2xSAknPLxJHtqyuhXGuJ3Mrtd2iW1vpOgFXWUtkYGHbOMaskqPDFc/pH1XJeXkt0906LLpzGqDIKoE2fVjkPzfE1kKi9lclzSxROLriUUY1SzRxDbPaOiY9CScVt8OuVbTIjqyEZDKQysD4gjYj2VAbDqm4apOuKWUg83cqDsDlRHpGN8e7FTqwtI4lSCJVjUDCIoCgDO+B7Tz9ayleirbX5FXfKIkGIgOZdQf8AsJI3/m/ZUu6iR96It/8AKTf3zUE+UHcZkhTGMSzb+eILTH94/Cp51FfiiL9ZN/ENeo8RYNKUoBSlKAUpSgFKUoBSlKAjXWPwR7zh1xbxjMhUMg5amjYSKmcjmVx76/K3GbRYpmRC+B+TIrJJHnfs5FYDvryJGxxkeQ/Z1Ut1+wKbrheVB1vIrbfWXXB3T5jc/E0Bw+pngINyt2pZ1SFtb4ZUEsh0iFNQGoqmoswyMsANsE9nr6b+jWwBOe3Jx54Q7+7+dWfpA2AAA2AGwHoB4VV/X0SLe1YHBEzbjY7p4H3V51LKdnqlDHjaPHoT1e293At9e5kecl1jQiKNEyQq4ix7cDAGwxzq0rKCOJVjjVURRhUUBQAPAAe37a4HVz+LLPcn6Ec9/E7fyqSVEpNs6ccEo6KH69W++CkeFtGCfa8/h47eP++r4lk7zDB+tv8Aacjz8tqojrubVxAKW04tYxuGwx7WQ7YG+xO/LKkc6mVz1wWaoHEc7s+Tp0qoU4yU1E745ZANdJJuKo4xkoydk34xGPm9xgbtDJnA3P0ZA5bk42qouoK8RZriI7SSRRsg8GEZcPj17w29GPhtZ3Q3pGt/bC5WMx5ZkKN3sFcZw2BqGCN8eY8KqjpF1SXiykWuiaBmOkFwjRKS2NYYgHTk7rkny3IqYVTiyp3anE2uvG/Se4traLLyx6wwXca5DGFi/wBPYZ8tQ86sTi1k0HBpYCctFw942I5EpbFGx8DUY6F9AIuHuLy/mi7UH6MFgkUZ372psan08hgBfDOARYXEb9IY+0fOnVGvdGd5HWNfdlh7qSfSQhHtsq/qCtWC3cuO43YKG3wzKJC4Hs1AbVbVcriF5KJRbWyx6+yaUmTOhQGComlSDlmLb8hoOx5VzLXpKXEjuOzQ2K3SD8pCvaLcIT46CI98flfDJXJ2VFqCxO7xXhUNzH2c8SypqDaWGRqGcEeu5+JrmNxGys5Fto0VZXxphgiy5zqbLCNdhgM2WI2DHzrn9HrJRefTfSTRWNkEeQ63VitwkpQncFgo1Ec8HNdbjZ/pFh/rMv8A4K6rK3Rt2sjwHSQ/OBH2P0DTtbCfWDmZVJx2eNk1BkDZ+sOXjXpxiW4N3awQyrEjLLLIezEjOIXgBiXUQE1CQ97cjwrkBP6AGGxHE9Xv+7BT9xrpcduCnELHTE8mqO7XCaRpBezzI2ojugZO2Ty2ra2Rk62eHSrirx3vDYVLBHmdpcHAxpEUat5gvINvNR5U6OcChh4hdSRpmRUgYSSM0j5k7UMNbknB0jatDpWdV0z/ANS3Cwpx4veuW39gT4ipHwwj5/djH+QtD9tyP9k1S6Je2U716Xeq8RD9ZVZj5d7Qv/lke6rO6j4g3Bo1YAqXmBB3BBkbIIqleta5L8TuFP8Ak2KD9pn/ANvHuq7eon8URfrJv4hruujg+ywaVikYGceJJ5k7n2/ur48YJB37pyMEgciNwDhhg8jkZweYFaYZ0pSgFKUoBSlKAUpWLJnB329fTG/nQGVUz19t/S+Fekkn8S3q5qpbr5TF3ws+csh/t29YzUWa/P3/AM6q3r5ANvanIx27gnc/kHy9hq0JUBBU8jkHBIODtsRuPaK0OOcDt7uPsrmISoCGAJZSCNgQykMNiRsfGvLF07PbOLlGkc3q7THDLQf5lT+0S386kKjnvnf029NqxghVFVEUKqqFVQMBVAwFA8ABtWZbG52FS3bKSpFbdYPV5cX10k8c0QXsjGwkyCvekK6QFYEYceRyufZrcK6mIBhrq5klbG4jwgzyHebUxAHsq0qVfySqiPii3ZDTdTWJFpbWgMMI7YaA/eth+ERSSdV12hzgnvDfbVt7WHEZmktJ9ZaO6nn0ISVURGEtbhsDxWIvggkGUjwqWV9rMv6Hxv2QvoZIWktTISS1hoTUdWWimK3HePMn6EnzC+lfJF+8g07hYo2Tx7iSq0f9gLUtuLGJ10PEjKDkKyqVB3yQCMA7n4nzqI9Z3SP5nbxQxwRTPcN2axSLqjKKBkaARncooHLf0rU7eiXHGLs70nc4kuRjtbVlU+GYZdRX24lz7FPlUN4xH/Q7NlyRc9vaZXfCXzFkPqAVUe+pz9xLcxJCbeNUQ5VFUKqMc6imnGM6mGRjIY+dbRtI9KpoXShQouAApTGjSPDGBj2VilRr42zj2tup4pcPoUslra6W0glA0l3kKeYyAM454rPpC2JrD/WyPja3QNbtxwa3klSd4I2lTGiRlBZcEkYJ5YJJFbM1sjlCyglG1IT+S2ll1D1wzD31llYuqIgz4gkt9yy8VjXwGA97DeL67o/hnxrtX5++Nn+ovf71pWxNwKBrhbop9KuMHUwUlQyq7JnSzqruAxGQGPpjDjXR6C6ZGmDHs9WjS8kRXVp196NhkHSux/N2xvW5InBpEP6Q/OP6fOhiMPzyzUhg/aDsWtd42B047TIwR+dvUysfxhdY5/NbT+Le/wDtX274LFJFJbshEcjdo2GOS5l7Vjk5I74B8t8eFbNvYqtxJcZOqSOKMjwAjaRgR6/SH4CtyRmDPz91xWRj4rOcbSCORfXKBT/aVquPqIb71RD9OY/94ajnXt0aMsCXsa5aAaJcczEx2b2K5PucnwqS9RI+9MR/zk38Rq9EXaR5pKmywqUpVEilfEYEAg5BGQfMV9oBSlKAUpSgFK+Nnwr7QCqZ6/P+lcK/WSfxLermqmevz/pXCv1kn8S3owWUfH2n9+1YTSqil2OFUFmJ5AAZJPsFZtzNcPpvZTTWFzDb/hXjKqOWoZGpBnxZdSj214l2fRbqJUF5x/idzDc8VS7aGCKVY0hBIVgxA0hPqsVVlJLZzk+VdDj8k56PWq3Essk9zcK0YZtbupLFFYndhp0sPVkFcK5seJycNjtBw6dIYJGdz2biSV2LYOgjJChiO6CBsTip5wTh1xxG/gu5rV7WzslxbQyDDswxhtJAO2FOeXcUDO5r0OkeJWx1bdJLpbhuE3cShraLZ1OSojCgCQglWGlhhhj2b7Ra/wCmdzeG7uU4kLOODBt4BgPPkkKoXIZjgZJIYAsBjHLK3tOJRXHEYVspWub1zGtxgiJImZzIwkxpwQVwc7Y8xivDg/Dktk7G94DcTzxMdLp2miTJyA5TusByB7wI8KUrs3J1RbHQLjElzY28s5AmkRieSlwrsnaBfIgA7DHe22Irmda3SaSytF7FtM8z6EIwSoAy7KDzP1V/7danQzo/cyXZ4nfRrCwj7K2txgdhHgjkPq90kY599sgbCuX1scOvDe2d3Fbvcww6D2aBn76y62DBQSFZQg1fo/Hmkszq5S+M4KDisPErXh78QldnaKV8OzaActIjFt2CqrHT9U7bV3Zfvh0jAzmGwXJ/N1xnPsB7ZgD6RelcSxuuI2/EJ76bhk8lzPERCqqWjjLaQuoqDsqLpxkHnnGcjW4GOI20V7brw+5a8umIebSdKppbWVYDSWJZsMGxlgd8AHpRyTJBwPppcOeK8QaUm1hUpbxkDQXLYhI8c4C6vPtPQVFeKdK+Jra2kXzmbtbjXOGB0yMrSdlDHqXcjUjtjxEijkBXi9tevwtbKLh9wqxytNcPocGRiSsYCYBIVcZG+6g7YqTp0fueLXEUgjl4fbWkKx25dcSakwVZF7pO+DkHACAA5raS2Zcno3ulXEr674hFwq1uTCY4lNxIhK9/QHdiyYOkAqAFxu+/pp9WHSC6Zr27u7qSWC2gwQSWRmGSCnIZ0odwMntBmuTZ8M4tZ3V5GlrJcT3KvGLog40s2WlEh7gLDGzMMEL5YOipvU4VJYR8OuE77S3UroygqGXSqggeCpncnunAxkjKVUbk7tkj4b0uvI+DXN9POTLPN2dtnHcJ2dk8gO/geHZ12OL9Jp7Lg0Hayl76eMBM/hB2hLayOZKIQufFtNVpxXpRDPHYWpiaO0tQvaKCC8rHBlYYwAT3sb/lsfSt/jcN1c3i8QvbK7S3lIKrCpLIiYCICfwecZyQuclgN6YryM34LG6l70yWDs9w8z9s+oOSxi7q4XLEkqQNWdhlj5E1OkmVlDKwZTjBXvA5OMgrnbPjyHjyqh+A2HFJpL1La0eCO+Y62kVo0ijZ3YqrMBnuuV2BOCcDfImnUezLHd2+vtIobnEbj6rZBDaR4KdKtj9M1E49s68fI9RJn07/ABZef6tL/cNaHUT+KIv1k38Q10Onn4tvf9Wm/uGub1Fr96YTk7STbeB755104+jjy9lh18zvivtK6HMUpSgFKUoBSlKAUpWGG1cxpxyxvnPPOeWPDHvoD6iAAAcgMD2CqN+ULe4n4eSCpRZJCDjIy8W2xIyNPhV6V+cflDzauJIv5lqgxnxMkrE49hHwFAXm3PPnXI6R9Ireyj7W4k0qThQAWZjjOFUfv5Dzra4LP2ttBKCR2kML52yQyK2DkeuPf4Vp9J7myhjWW97Ls0cFDInaYfBI0LgnVgHkPCvHWz3ZPHREV6yLqfey4RcTJgkPJlVP7IK+f5VfU4n0jfcWVpEM7amycev0x/cK3W61eGgnM7MM7YhkGBgc9W53zvgDBA9vc4f0ttJrWS8SXMEWrWxVgVKgEgrjJOCOWeYq3r+JzVPuRGnj6SMB9JYp6Yzj4qa8xadJP+tWX7I/9KpnwDjUN7CJ4GLIxK7gqQRsQQdwf99avR/pPbXbzRW7MTAQrZUqMZKgofFcgj3VmT9G4R9kW+Z9JP8ArNl+yP8A0qyFt0k/r7L9n/l17cW617KCaWFo52MTmNmVYwupThguuQE4O3L+VbfRnrItL24FtHHOkjKWXtEUAgDURlXbBxvuMbc+Vb+Xoz8LrJnP+b9JP66x+H/Lp836Sf11j8D/AMFWDXD6S9LbWxKC4dlLhioVS5wpUEnHLdh9vlUqV9ItwSVtsjfYdJP66x+B/wCCvnYdI/62x+B/4K6vDusfh00qQrMVaTATWjKpJ5Lq5An1x5c9qkPFuIx20LzzNpjjGpjjJ8sAeJJwAPWtba8GKMXtSIT2HSP+tsfgf+Coh1gzSrewjiome0WGMhYMBJJeyHaYJIUZl1ZP1gunHhUyPW7w8DJW4Hd1AGNcsMZ27+PiR8KlXRvj8F9CJ4GJXUVIYaWVgASrDzwQffW247aJcYy0pFTdAOit4I5b63t4o5XYLbCfJEcZJaR1DAknZEVjuQXPtlrRdJP62xB9Ac/albfGutGwt5jCTLKVOHaJVZEIOCCzMNRB/Nz8dqkkfHIGtTeJIHgEbSF1BPdQEt3eeoYOVO4O1JSl20Ixj0mQp+inGbpSt5xRI42xqS3TcjG6sQqezGWHtqZ9GOAQ2cItoFIVe8WO7Ox2LMQAC2w5cgBUFl657bPctpiME95ok5AnH1zvt7+QByK7vQDp+nEZpYhA0RSMSAlw+pdQUg4UaWyRtv4+VGpNbWgpQT09na6wpdPC71jy+buufVsKB8TXJ6hLjVwpVXB0Tyq2+Mcn223+svlz+Oz10XIXg04G2tok/wC9UkfAGuH8nG4zZ3Mefq3GrH+nGg/2PsrvFUjzydstylKVRIpSlAKUpQClKUApSlAK/LfXTca+MXP6AiQe6JD+8mv1CucnOMeHn6599fknrGue04petjGLiRf2G7PP9mgL+6up9fDLNv8AMKv7GU/2a7N/YRTLomijlXIOmRFkXI5HDAjPrUV6nSW4RbnmFMynfcHtnIGMcsEeNTOvLNUz2QdxKR+5kC9JhAsMQhDqey0qEybPWCI+Wz5bYYBPqKsbrAjC8LuwAABA2AMADlyFQOf/AOrfev8A4EVPusM/ey8/Ut/Kql3EiH1kRfqb41axWPZyXMMbiZ2Ku6ocNowQGIyOYyM7g1y+pLe8vyGOk6fXI7R8Enny+OadWPQexvLHtZ4SzmaRQ2tlIVcYwFIUnc8wfD2V96kARcXyatQQIufPDOudtuS8/GqdVKiY3cbNboLbxvx+9DojYe9ZQwBOrt1GQDt9Utg4zu1XDFbIpyqIp5ZVQDjy2FUJa9HXveNXcMcwgZJrqTtF1MwxMQMYYYbLAbEcjzq2+hXR+5tFlW4vnugxUpr1fR4zqwXZjvkbchp9TU8n7K4f0SWqk66oVe84cjnuuSreHdMsQP2fuq26p7rylIuLMqDrVJGU/mlXjbVvscAHnt8Knj+x05/qe/W70Ts7azjnggSJklWMgZAdGV8qd92yAc8/rV2OlFxJL0c1tlpHtrUsSMliXhy2PM88++oD0x6fzcQt1gaNI11IzYYgyN3gpJbuxxg5YgsSe6QcAkWL004cYOAPb51GKCBCRjcq8QJGfDOfXFW01V+zkmm5NejhdWvQOxuLJbiZGkeR5RnXJGAqsY8aUYc8EnOfrY5VKuOWEXDeFXQs4zGBG7DBLMGfCF9RySQCDk8gvpUM6uOsK1t7MWtwxgaN2Ibs2kQq7lyMJlgRkjB9DvuKsrjVpHeWjojZFxAyxuMkYdNSNnkBsDk48B41Mry30VDHHXZWXV31c213YtLI7l5WdEZGKqgRsBtJA15YasMOQGwO9bPULLrhvIHw0eYm0ncfSCRHGDzBVFr06lukAQy8Ol7kgkd41PMHlJDy+sunV65byqfdHei9tZGU28ejtmDNuSBjOlFH5KjJwPX2Vs5NWmZxxTpr/Soet3ovbWckBtV7ITJIGXUSpKtGBjUSRnVvvju1d3R7o1bWa9nbQrHkAMwHefTnBdubcyfeaqj5QURzZYGTpuTgeQ7Ik/DJ91XlbrnPgc8/TyqlbSsh0pOitflDzaeHQxg413KZ9QschwffpPurg/JsuO/ex55rC4HhsZAT9orZ+UncdyyjzzaZsf6IjGf7R+NcD5O0xHEZVzs1q+3mVliwfgW+NdjifomlYh98b8s8jj48s+lZUApSlAKUpQClKUApSlAK/HnTNs8QvT53dx/Gev2HX5L6fcKkS/ujj8Je3KoBzJ1JIPisyfbQF19Q6A8JUHl28v8AeBqcT2pG43H21FepawMPDFRiCe2uNxyOmVkyPTKmpyiAAADAAwAOQHkKmUVIuM3Hog0Q4fJxB8JH8+iUamKlXwY13DEBXIjZRkZIBHIV0eNcJS4glgbKrMhVmXAbcYzuNyPXyricajUX4CjEhv4GXHPBsiJvd2SEH2L6VLNGdj47bc9/KuElTPRCVpnB6G9HRw+2W2EjS4ZnLFQuSxBICjOBt5mo11b9ELixubx5tJSQr2bhgS41O2SOa/WHPG/nzrudX3Do04fasiYLQxyHJZu+0ShmXUTpz5LgbnzNbnSC8lU28MLKkk82jWy6wirFJM5CZGo4TSNx9ast20bSpP0VFb8YPC+M3U9xBJokkuAOQykkokWRNWAw2GwP5R8sVanR3prZXrdnBNmTGrQysjY8cahhsehNb3CLkzxMsyKXjkeKVcZQuh+sqtnCspVwDkgOBk4rlNYcNs545jbR28rB1R1jwoVdIZiY+5GCHA1Np+tgmtk0/GzIpx2nolFVN1wjN9w1SMgvg5GobyxA7eO376tcZyc4xtjzzvnP2fbVc9bnRi7umt5rVO0MQkBCsEdSSpV1yRnBXw3BA92cf2K5dxPvXraobFJSo1pOiq22QrK4ZM89JwDjzUeVZcekL9GgzuQ3zW2OrO5YNFjfmSSAPXNQjpNxLjN+kdlNZvlXU5WGRDIwBQO7N3VXcnPdXfPhVg9NrI23AWh1ZMUEEZPgSHjU4z67jluBV1SS/s5Xbk16Iv1e9AbO7so57gOzyvL3hIUwVYqEVfyshWYk77GrbsrRIYkijXCRqqKM5wqgAbk77eJ3qv8Aqj6R2gsUtmuI0kR5O67LGWDOXBUHAOxxtyIPpUq6bXDpYXEsTMHWIsjISCG8CMc+dTO3KmXx4qNogvW90OI++dtlZEIaYLkHbGLhSNwykDOPRvA5nHV7x5r6zjmcYlUtHKMY+kTYnHhkENjwyR4VzOqeee/4aRdN2gLSxa2IYvHgDv45nJYb7kAGox8ne5Om8jJ2+gdR5E9orH34X4VWLcd+CFJKVryeXyid2sgBvi4+0wgfbV6W4PeyuN9jnORgb+m+Rj0qjPlEbNYnltPv7DDuKvcuBjJ57D1PlXWK0jjJ7ZRvyk2+ksh+hOfiYv8AdXB6gGxxX228o+1DUm+UTaNI1oyDOhLkvvyC9ix29hz7K4PUBZP90e109028+D56XhDEemXAz7fKqJP0XSsIlIABJYgczjJ9Tjas6AUpSgFKUoBSlKAUpSgFVp046JXD3Ynt7VbjVJHMuqVYhBcInZCSQMMyQlRExRdyYB+cc2XSgOb0b4SLW2itgxbs0CljzZubMfaxJ99dKlKAidlBH90byZo9TotvGrbkqrplgF5KMhSTzOAPCu9JbYIK7jI2rXsOFsl1dTllKzCEKozkdmrK2r25+ytuSLThhuFycHw2OSD7M1ElZ0hKuiGdXNsE4dbYLnXDG51uz4JRRhNROhRjZRgDwrZ44ALmxY8jcSL7CbS5Ix7cY99bXRLgUtvAsElykyxpGkWIexKqoI730ja8jTvtyPPO3tx/hTSxhQ3ZyK6SRPjUFeNgwyuRlTupGRkMeVcmt2dk7jXk53AVxPf+Xztfj80tc1r9LFlZoEhCGSQzRjtM6AGhbUWA3YYHIc9q63BrBolfW4eSWV5XKgquWwoVVJJAVFRdzvpz44rHiFiXlt5dRXsJGbSFL69cbwgEj6oGsMTg8vfU+Sn9aPbh9p2UMUWov2caJqb6zaFC6m9TjJ9tczgbt84vlYnAuI9OTyBtYDt5DOffmu7nw/x8a5ttw+RLiWYSp2cpQmMxnWCkYjGJO0xjYHGipRT8HzpFetBa3EyY1RQySKGBKkohYAgEbbedfLm0W6tWikw6yoVbKMgOfHRqDDB9Ryzmtri1is8EsDEhZY3jJHMB1KkjPjg0skdVAc5O3kcegwq7euM7mnRtWytuLdTED/gLqWPcYWRRMvLGNip8BvvyqS9C+iZtrBrKeTtlkMmQAVVUkGCi538z7WNS1VzXsie+qylJUQ4Ri7RQF7w3jHCGlgtjOYJT9eNRMjruqkjQ3ZSacA4wdvEYNWJ1K9EZrO2keZSktwyEoeaRoG0Bh4MdTEjw2zVjCDOD9Xzr3jiA5V3Vvs82ltFHfKSHfsRyGmcb8hvCM1ea1yePdGbW87I3MKymF9ceSRpO2eRGVOBlTkHAyK69WQRLrH4Mbi3R1iaUwsxaNMa5IpI3hmSPP5ehyy+qCuR1UdHDAGlaKSNVjS3i7ZezldQ7yyzumToDyOQFJyFjWrEpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAYSxhhj/ArWNr+cS3ht+/etysd8+n25/xmpcUylJro0msj4EV5fN2zjT/ALvjXUpUviRa5pHLNs3lQW7/AJtdSlZ8SN+aRoQWZIBfY7ZA3x6Z8fhWw9qpHICsxCuovgaiACfEgEkDPkCT8TXpVqCRD5JPyanzT1+yvaGLT45zXrWEz6VJALYGcDGT6DJAz76KKRjk2Z0pSqJFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFYuTjYZPhnb7aypQGMikggEqSCARjI9RkEZ9orKlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgP/9k="
            alt="View All Menu"
          />
          <div className={styles.divs}>
            <p className={styles.cardnamesp}>View All Menu </p>
            <img
              className={styles.arrow}
              src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browsecat;
