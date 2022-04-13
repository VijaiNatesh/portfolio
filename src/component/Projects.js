import React from 'react'
import styles from '../../src/myStyles.module.css'
import inventory from '../../src/inventory.jpg'
import stumen from '../../src/studentmentor.jpg'
import pictagram from '../../src/pictagramLogo.jpg'
import ecommerce from '../../src/ecommerce.png'

function Projects() {
    return (

        <div >
            <h2 className={styles.projectHeader}>Projects</h2>
            <div className={styles.projectDisplay}>
                < img className={styles.projectImage} src={inventory} alt="inventory" />
                <div className={styles.projectDes}> <b className={styles.projectTitle}>INVENTORY</b>
                    <p> Inventory Management Application </p>
                    <a className={styles.projectLink} href="https://inventoryvijainatesh.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Live</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/inventory-frontend/tree/main/frontend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Frontend Code</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/inventory-backend/tree/main/backend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Backend Code</button></a>
                </div>
            </div>
            <div className={styles.projectDisplay}>
                <img className={styles.projectImage} src={stumen} alt="student mentor" />
                <div className={styles.projectDes}> <b className={styles.projectTitle}>STUDENT MENTOR</b>
                    <p> Student Mentor Assigning Application </p>
                    <a className={styles.projectLink} href="https://assign-mentor-vj.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Live</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/assign-mentor-frontend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Frontend Code</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/assign-mentor-backend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Backend Code</button></a>
                </div>
            </div>


            <div className={styles.projectDisplay}>

                <img className={styles.projectImage} src={pictagram} alt="pictagram Logo" /> <br />
                <div className={styles.projectDes}> <b className={styles.projectTitle}>PICTAGRAM </b>
                    <p> Picture Uploading Application </p>
                    <a className={styles.projectLink} href="https://pictagram-vj.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Live</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/pictagram_frontend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Frontend Code</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/pictagram_backend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Backend Code</button></a>
                </div>
            </div>

            <div className={styles.projectDisplay}>

                <img className={styles.projectImage} src={ecommerce} alt="ecommerce" /> <br />
                <div className={styles.projectDes}> <b className={styles.projectTitle}>E-COMMERCE </b>
                    <p> E-Commerce Application to buy products.</p>
                    <a className={styles.projectLink} href="https://vj-ecommerce.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Live</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/ecommerce-frontend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Frontend Code</button></a>
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/ecommerce-backend" target="_blank" rel="noreferrer"><button className={styles.linkButton}>Backend Code</button></a>
                </div>

            </div>
        </div>
    )
}

export default Projects
