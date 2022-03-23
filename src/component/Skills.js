import React from 'react'
import styles from '../../src/myStyles.module.css'



function Skills() {
    return (

        <div className ={styles.skillBackground}  >
        <h1 className = {styles.skillsHead}>Skills</h1>
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
            </div>          
        </div>
    )
}

export default Skills
