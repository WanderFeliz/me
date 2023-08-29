import styles from "./testimonials.module.scss";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className={styles.testimonials} id="testimonials">
      <h1>Testimonials</h1>
      <div className={styles.container}>
        {data.map((d) => (
          <div
            key={d.id}
            className={
              d.featured ? `${styles.card} ${styles.featured}` : styles.card
            }
          >
            <div className={styles.top}>
              <figure className={styles.left}>
                <Image
                  src="./assets/right-arrow.png"
                  fill
                  sizes="(max-width: 768px) 100vw"
                  alt=""
                />
              </figure>

              <figure className={styles.user}>
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw"
                  src={d.img}
                  alt=""
                />
              </figure>
              <figure className={styles.right}>
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw"
                  src={d.icon}
                  alt=""
                />
              </figure>
            </div>
            <div className={styles.center}>{d.desc}</div>
            <div className={styles.bottom}>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
