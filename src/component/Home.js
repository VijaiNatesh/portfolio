import React from 'react'
import styles from '../../src/myStyles.module.css'
import gitimage from '../../src/Gitimage.png'
import resume from '../../src/Resume.jpg'
import About from './About'
import Skills from './Skills'


function Home() {
    return (
        <div className ={styles.container} >

            <div>
                <p className={styles.homeContent}>Hi, my name is <br/> <div className ={styles.myName}>Vijayakumar </div> <br/> I'm Full Stack <br/> Developer</p>                
            </div>

            <div className={styles.homeIconDisplay}>
                <a href="https://github.com/VijaiNatesh" target="_blank" title="Click to view my GitHub account" rel="noreferrer"><img className={styles.contact} src={gitimage} alt="GitHub" /> </a>
                <a href="https://drive.google.com/file/d/1kcZ9Uc8enjhkScQEE2PZmeUjzPuwL9t1/view?usp=sharing" target="_blank" title="Click to view my Resume" rel="noreferrer"> <img className={styles.contact} src={resume} alt="resume" /> </a>
        
            </div>
            <About />     
            <Skills />      
        </div>

    )
}

export default Home
