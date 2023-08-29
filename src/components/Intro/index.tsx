import Image from "next/image";
import Link from "next/link";
import profilePic from "./../../../public/assets/me.jpg";
import downImg from "./../../../public/assets/down.png";
import styles from "./intro.module.scss";
import TypewriterComponent from "typewriter-effect";

const Intro = () => {
  const strings: Array<string> = [
    "Backend Developer",
    "Frontend Developer",
    "Fullstack",
  ];
  return (
    <div id="intro" className={styles.intro}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={profilePic}
            priority
            className={styles.image}
            alt="Wander Paniagua image"
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Hi there, I&apos;m</h2>
          <h1 className={styles.name}>Wander Paniagua</h1>
          <h3 className={styles.subtitle}>
            Software Engineer
            <span className={styles.ocupation}>
              <TypewriterComponent
                options={{
                  strings: strings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>
          <p className={styles.description}>
            I&apos;m a software developer based in San Cristóbal, Dominican
            Republic. I enjoy building things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </p>
          <div className={styles.btnContainer}>
            <Link href="#contact" className={`${styles.btn} ${styles.contact}`}>
              Contact Me
            </Link>
            <Link href="#works" className={styles.btn}>
              See My Work
            </Link>
          </div>
        </div>
        <Link href="#portfolio" className={styles.downImg}>
          <Image src={downImg} alt="Down arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
