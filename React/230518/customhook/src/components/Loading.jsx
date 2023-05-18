import React from 'react'
import loading from '../images/loading.gif'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <img src={loading} className={styles.imgLoading} alt='' />
  )
}
