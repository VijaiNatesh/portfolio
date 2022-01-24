import React from 'react'
import styles from '../../src/myStyles.module.css'
import image from '../../src/full_stack_banner.jpg'

function Home() {
    return (
        <>
        <div className = {styles.aboutDisplay}>
           <p className = {styles.homeContent}>Full Stack Developer <br/> based in Namakkal, Tamilnadu</p> 
            <img className = {styles.image} src ={image} alt = "Full Stack Developer"/>           
        </div>
        <div className ={styles.aboutDisplay}>
        <a className ={styles.projectLink} href = "https://github.com/VijaiNatesh" target= "_blank" rel="noreferrer"><button> GitHub Account</button></a>
        </div>
        <div className ={styles.aboutDisplay}>
        <a className ={styles.projectLink} href = "https://drive.google.com/file/d/1ee93AE4ftyoVja_vdCZijeu-2NKrt0Ux/view?usp=sharing" target= "_blank" rel="noreferrer"> <button>Resume</button></a>
        </div>
        </>

    )
}

export default Home
