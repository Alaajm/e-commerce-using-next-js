import Image from "next/image";
import styles from "./about.module.css";
import Aboutus from "/public/images/aboutus.svg"
const About = () => {
  return (
 <>
    <div className={styles.container}>
      <div className={styles.text}>
        Aliquip dolor elit proident veniam ea quis aute ad cillum laboris.
        Commodo et culpa ad ipsum proident nisi enim do nisi proident. Nostrud
        nisi dolor id anim duis incididunt quis enim enim aliquip ad velit. Quis
        pariatur elit reprehenderit sunt incididunt ut ea commodo nulla
        voluptate. Cupidatat reprehenderit sint velit id culpa velit pariatur
        sint veniam enim sit reprehenderit et ex. Magna sit quis quis elit
        eiusmod sint esse ipsum qui. Et esse cupidatat non minim et Lorem
        incididunt aliqua ea. Magna cupidatat id nostrud velit aliquip deserunt
        amet ut fugiat sit commodo est nisi nulla. Mollit dolor irure qui ut
        reprehenderit pariatur tempor.
      </div>
      <div className={styles.image}>
        <Image src={Aboutus} width={500} height={500} />
      </div>
      
    </div>
    <div className={styles.textUnder}>
    Aliquip dolor elit proident veniam ea quis aute ad cillum laboris.
    Commodo et culpa ad ipsum proident nisi enim do nisi proident. Nostrud
    nisi dolor id anim duis incididunt quis enim enim aliquip ad velit.
  </div>
 </>
  );
};

export default About;
