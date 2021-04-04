import React from 'react'
import styles from "../../styles/Home.module.css";
import Head from "next/head";

function Index(){

    return(
        <div className={styles.container}>
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Contact Us
                </h1>
            </main>


        </div>
    )
}export default Index;
