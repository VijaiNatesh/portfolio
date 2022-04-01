import React from 'react'
import styles from '../../src/myStyles.module.css'
import gitimage from '../../src/Gitimage.png'
import image from '../../src/NV.jpg'
import LinkedIn from '../../src/linkedin.png'



function Home() {
    return (
        <div className={styles.container} >

            <div className={styles.homeDisplay}>
                <p className={styles.homeContent}><b>Hi, I'am Vijayakumar</b> <br /> <p className={styles.homeAbout}>Full Stack Developer,
            <br />
                    Passionate about building web applications that are performant, accessible and have a great user experience.</p></p>
                <img className={styles.myImage} src={image} alt="Vijayakumar" />
            </div>
            <div className={styles.homeIconDisplay}>
                <a href="https://github.com/VijaiNatesh" target="_blank" title="Click to view my GitHub account" rel="noreferrer"><img className={styles.contact} src={gitimage} alt="GitHub" /> </a>
                <a href="https://www.linkedin.com/in/vijay-natesh-1a59111aa/" target="_blank" title="Click to view my LinkedIn account" rel="noreferrer"><img className={styles.contact} src={LinkedIn} alt="LinkedIn" /> </a>
            </div>
        </div>

    )
}

export default Home
