import React from 'react'
import styles from '../../src/myStyles.module.css'
import gitimage from '../../src/Gitimage.png'
import image from '../../src/NV.jpg'



function Home() {
    return (
        <div className={styles.container} >

            <div className={styles.homeDisplay}>
                <p className={styles.homeContent}><b>Hi, I'am Vijayakumar</b> <br /> Full Stack Developer
            <br />
                    <p className={styles.homeAbout}>Passionate about building web applications that are performant, accessible and have a great user experience.</p></p>
                <img className={styles.myImage} src={image} alt="Vijayakumar" />
            </div>
            <div className={styles.homeIconDisplay}>
                <a href="https://github.com/VijaiNatesh" target="_blank" title="Click to view my GitHub account" rel="noreferrer"><img className={styles.contact} src={gitimage} alt="GitHub" /> </a>

            </div>
        </div>

    )
}

export default Home
