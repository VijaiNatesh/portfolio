import React from 'react'
import styles from "../../src/myStyles.module.css"
function Contact() {
    return (
        <div className={styles.compAlign}>
            <div className={styles.contactContent}>
                Phone: 9629145246 <br />
                Mail: glennvijay@gmail.com<br/>
                github:  <a className ={styles.projectLink} href = "https://github.com/VijaiNatesh" target= "_blank" rel="noreferrer"><button> GitHub Account</button></a> <br/>
                Resume:   <a className ={styles.projectLink} href = "https://drive.google.com/file/d/1ee93AE4ftyoVja_vdCZijeu-2NKrt0Ux/view?usp=sharing" target= "_blank" rel="noreferrer"> <button>Resume</button></a> 
            </div>           
        </div>
    )
}

export default Contact
