import React from 'react'
import styles from '../../src/myStyles.module.css'

function Contact() {
    return (
        <div className ={styles.info}>
            <p className = {styles.infoDetail}>Email: glennvijay@gmail.com</p>
           <p className = {styles.infoDetail}> Call me: 9629145246</p>
           <p className = {styles.infoDetail}> Location: Namakkal, Tamilnadu.</p>
        </div>
    )
}

export default Contact
