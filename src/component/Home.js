import React from 'react'
import styles from '../../src/myStyles.module.css'
import image from '../../src/full_stack_banner.jpg'
import gitimage from '../../src/Gitimage.png'
import resume from '../../src/Resume.jpg'

function Home() {
    return (
        <div className = {styles.WebContainer}>
        <div className = {styles.articles}>
            <div className={styles.aboutDisplay}>
                <p className={styles.homeContent}>Full Stack Developer <br /> based in Namakkal, Tamilnadu</p>
                <img className={styles.image} src={image} alt="Full Stack Developer" />
            </div>
            <div className={styles.contactDisplay}>                
                <a href="https://github.com/VijaiNatesh" target="_blank" title="GitHub" rel="noreferrer"> <img className={styles.contact} src={gitimage} alt="GitHub" /> </a>
                <a href="https://drive.google.com/file/d/1kcZ9Uc8enjhkScQEE2PZmeUjzPuwL9t1/view?usp=sharing" target="_blank" title="Resume" rel="noreferrer"> <img className={styles.contact} src={resume} alt="resume" /> </a>
            </div>
            </div>
        </div>

    )
}

export default Home
