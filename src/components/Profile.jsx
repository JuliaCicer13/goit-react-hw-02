import styles from'./Profile.module.css'
export default function Profile({name, tag, location, image, status }) {
   
    return (
      <>
   <div className={styles.card}>
    <div className={styles.profile}>
     <img className={styles.avatar} src ={image} alt="User avatar"/>
       <p className={styles.name}>{name}</p>
       <p className={styles.tag}>@{tag}</p>
       <p className={styles.location}>{location}</p> 
       <p className={styles.status}>{status}</p> 
  </div>

  <ul className={styles.status}>
    <li className={styles.wrap}>
      <span className={styles.label}>Followers:</span>
      <span className={styles.value}>5603</span>
    </li>
    <li className={styles.wrap}>
      <span className={styles.label}>Views:</span>
      <span className={styles.value}>4827</span>
    </li>
    <li className={styles.wrap}>
      <span className={styles.label}>Likes:</span>
      <span className={styles.value}>1308</span>
    </li>
  </ul>
</div>
      </>
    );
  };

 