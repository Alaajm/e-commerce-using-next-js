"use client";
import Image from "next/image"
import styles from "./DetailBlog.module.css"
import { Router } from "next/router";
import { useEffect, useState } from "react";

const page = ({params}) => {
    
    var res;
    var data;
    const [product, setProduct] = useState()
    useEffect(() => {
      const fetching = async () => {
        res = await fetch("http://localhost:4000/products");
        data = await res.json();
        setProduct(data.find((d) => d.productID == params.id))
    
      }
      fetching()
    }, [])
  if(!product) return;
    return (
        <div className={styles.container}>
            <header className={styles.header}>

                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.postImage}
                        src={product.imageURL}
                        alt="post"
                        width={350}
                        height={250}
                    />
                </div>
            </header>
            <div className={styles.content}>
                <p className={styles.text}>
                {product.description}
                </p>
            </div>
        </div>
    )
}

export default page
