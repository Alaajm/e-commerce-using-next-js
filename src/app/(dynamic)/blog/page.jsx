"use client";
import React, { useEffect, useState } from 'react'
import styles from "./blog.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Blog =  () => {
  var res;
  var data;
  const [productsList, setProductsList] = useState([])
  useEffect(() => {
    const fetching = async () => {
      res = await fetch("http://localhost:4000/products");
      data = await res.json();
      setProductsList(data)

    }
    fetching()
  }, [])
  return (
    <div className={styles.mainContainer}>
      {
        productsList?.map((product, index) =>
     <Link href={`/blog/${product.productID}`} key={product.productID}>
     <div className={styles.post}>
       <div className={styles.imageContainer}>
         <Image className={styles.image} src={product?.imageURL} width={250} height={200} />
       </div>
       <div>
       <h1 className={styles.title}>
         {product?.title}
       </h1>
       <p className={styles.desc}>
         {product.description}
       </p>
       </div>
     </div>
   </Link>)
        
      }
    </div>
  )
}

export default Blog;
