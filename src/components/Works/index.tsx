import Image from "next/image";
import { useState } from "react";
import styles from "./works.module.scss";

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState<number>(0)

  const handleClick = (direction: "left" | "right"): void => {
    if (direction === "left") {
      setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
    } else {
      setCurrentSlider(currentSlider < 2 ? currentSlider + 1 : 0)
    }
  }

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Authentication APIs",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Scripting",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <div id="works" className={styles.works}>
      <div className={styles.slider}
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className={styles.container}>
            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.leftContainer}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={d.icon}
                      width={300}
                      height={300}
                      alt={d.title}
                    />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  priority
                  src={d.img}
                  width={600}
                  height={600}
                  alt="right image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image
        src="./assets/arrow.png"
        width={40}
        height={40}
        alt="Left Arrow"
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => handleClick("left")}
      />
      <Image
        src="./assets/arrow.png"
        width={40}
        height={40}
        alt="Right Arrow"
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
