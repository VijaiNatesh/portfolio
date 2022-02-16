import React from 'react'
import styles from '../../src/myStyles.module.css'
import mernimage from "../../src/mernimage.jpg"


function Skills() {
    return (

        <div  >
            <div className={styles.listDisplay}>
                <p className={styles.list}>HTML</p>
                <p className={styles.list}>CSS</p>
                <p className={styles.list}>JavaScript</p>
            </div>
            <div className={styles.listDisplay}>
                <p className={styles.list}>React</p>
                <p className={styles.list}>Node.js</p>
                <p className={styles.list}>MongoDB</p>
                <p className={styles.list}>Express</p>
            </div>
            <div className={styles.listDisplay}>
                <p className={styles.list}>Git</p>
                <p className={styles.list}>MySQL</p>
                <img className={styles.skillimage} src={mernimage} alt="mern" />
            </div>
          
        </div>
    )
}

export default Skills
