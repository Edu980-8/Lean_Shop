"use client";
import React from "react";
import styles from "./DownloadCard.module.scss";



export function DownloadCard({type}){
    const data = {
        type1: {
            image:'/googleplay.svg',
            text: 'Google Play'
        },
        type2: {
            image: '/appstore.svg',
            text: 'App Store'
        }
    };
    const { image, text } = data[type];

    return (
        <div className={styles.parent_download_card}>
            <img src={image} alt="" />
            <div>
                <p>Get it now</p>
                <h4>{text}</h4>
            </div>
        </div>
      
    );
}
