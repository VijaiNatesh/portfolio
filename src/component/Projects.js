import React from 'react'
import styles from '../../src/myStyles.module.css'

function Projects() {
    return (
        <div className = {styles.projectBackground}>
            <h2 className={styles.projectHeader}>Projects</h2>
            <div className={styles.projectDisplay}>
                <h2 className={styles.projectTitle}>Inventory Bill App <br />
                    <a className={styles.projectLink} href="https://inventoryvijainatesh.netlify.app/" target="_blank" rel="noreferrer">See Live</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/inventory-frontend/tree/main/frontend" target="_blank" rel="noreferrer">Frontend Code</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/inventory-backend/tree/main/backend" target="_blank" rel="noreferrer">Backend Code</a></h2>
                <p className={styles.projectDes}>Inventory Bill App is a <b> free billing app</b>.
                                            Along with billing, you can use it for <b> inventory management</b>.
This app helps you to manage and grow your business.
                                           It was developed with <b>MongoDB, Express, React and Node</b>.
                                             It handles the <b>Create, Read, Update and Delete Operations</b> of purchases and sales.
                                             User Authentication in Inventory Bill app keeps unauthorized users from accessing sensitive information.</p>
            </div>
            <div className={styles.projectDisplay}>
                <h2 className={styles.projectTitle}>Student Mentor Assigning App <br />
                    <a className={styles.projectLink} href="https://assign-mentor-vj.netlify.app/" target="_blank" rel="noreferrer">See Live</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/assign-mentor-frontend" target="_blank" rel="noreferrer">Frontend Code</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/assign-mentor-backend" target="_blank" rel="noreferrer">Backend Code</a></h2>
                <p className={styles.projectDes}>Student Mentor Assigning is a <b> free MERN Stack App</b>.
                                            This app helps you to <b> create Students and Mentors in the Cloud</b>.
                                            Along with that, you can <b>assign students to mentor</b> and <b> change mentor for students </b>.
                                            It will display the <b> list of mentors with their students.</b>
                    It was developed with <b>MongoDB, Express, React and Node</b>.
                                            </p>
            </div>
            <div className={styles.projectDisplay}>
                <h2 className={styles.projectTitle}>Reset Password <br />
                    <a className={styles.projectLink} href="https://password-reset-vj.netlify.app/" target="_blank" rel="noreferrer">See Live</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/password-reset-frontend" target="_blank" rel="noreferrer">Frontend Code</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/password-reset-backend" target="_blank" rel="noreferrer">Backend Code</a></h2>
                <p className={styles.projectDes}> Reset Password was developed with <b>MERN stack</b>.
                                            It is used in <b>User Authentication</b> of an application.
                                            If a user of an application forgot his/her password, reset password system will <b>send a link to the registered mail</b> through which
user will be able to reset their password.
                                            </p>
            </div>
            <div className={styles.projectDisplay}>
                <h2 className={styles.projectTitle}>E-Commerce App<br />
                    <a className={styles.projectLink} href="https://vj-ecommerce.netlify.app/" target="_blank" rel="noreferrer">See Live</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/ecommerce-frontend" target="_blank" rel="noreferrer">Frontend Code</a><br />
                    <a className={styles.projectLink} href="https://github.com/VijaiNatesh/ecommerce-backend" target="_blank" rel="noreferrer">Backend Code</a></h2>
                <p className={styles.projectDes}> App was developed with MongoDB, Express, React and Node.
                                                     User Authentication.
                                                    User will be able to add products of their wish to Cart.
                                                     User will be able to place order from Cart.
                                                    Products in Cart can be deleted.
                                                    Number of products ordered can be edited in the Cart page.
                                                    In Order Page, User will be able to see the details of products and price of the Orders.
                                                    
                </p>
            </div>
        </div>
    )
}

export default Projects
