import React from 'react'
import styles from '../../src/myStyles.module.css'



function Skills() {
    return (



        <>
            <h1 className={styles.skillsHead}>Skills</h1>
            <div className={styles.skillContainer}>

                <h1 className = {styles.skillEnd} >Frontend</h1>
                <div className={styles.skill}>
                    <p> HTML <b className={styles.set}>90%</b></p>
                    <progress className={styles.progress} value="90" max="100"></progress>
                </div>
                <div className={styles.skill}>
                    <p> CSS <b className={styles.set}>70%</b></p>
                    <progress className={styles.progress} value="70" max="100"></progress>
                </div>
                <div className={styles.skill}>
                    <p> JavaScript <b className={styles.set}>70%</b></p>
                    <progress className={styles.progress} value="70" max="100"></progress>
                </div>
                <div className={styles.skill}>
                    <p> React <b className={styles.set}>80%</b></p>
                    <progress className={styles.progress} value="80" max="100"></progress>
                </div>
            </div>

            <div className={styles.skillContainer} >
                <h1 className = {styles.skillEnd}>Backend</h1>
                <div className={styles.skill}>
                    <p> NodeJs <b className={styles.set}>50%</b></p>
                    <progress className={styles.progress} value="50" max="100"></progress>
                </div>
                <div className={styles.skill}>
                    <p> MongoDB <b className={styles.set}>70%</b></p>
                    <progress className={styles.progress} value="70" max="100"></progress>
                </div>
                <div className={styles.skill}>
                    <p> Express <b className={styles.set}>70%</b></p>
                    <progress className={styles.progress} value="70" max="100"></progress>
                </div>
            </div>

            <div className={styles.skillContainer} >
                <h1 className = {styles.skillEnd}>Database</h1>
                <div className={styles.skill}>
                    <p> MySQL <b className={styles.set}>70%</b></p>
                    <progress className={styles.progress} value="70" max="100"></progress>
                </div>
            </div>

        </>
    )
}

export default Skills
