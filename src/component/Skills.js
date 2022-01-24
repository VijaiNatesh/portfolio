import React from 'react'
import styles from '../../src/myStyles.module.css'

function Skills() {
    return (

        <div className ={styles.skillsDisplay}>
            <ul>
                <li className ={styles.list}>HTML</li>
                <li className ={styles.list}>CSS</li>
                <li className ={styles.list}>JavaScript</li>
                <li className ={styles.list}>React</li>
                <li className ={styles.list}>Node.js</li>
                <li className ={styles.list}>MongoDB</li>
                <li className ={styles.list}>Git</li>
                <li className ={styles.list}>MySQL</li>
            </ul>
        </div>

    )
}

export default Skills
