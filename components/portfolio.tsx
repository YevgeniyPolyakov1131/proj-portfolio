import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ id, image, title, linkGit, linkSite }: { id: number, image: string, title: string, linkGit:string, linkSite: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div class="image-container" ref={ref}>
        <img src={image} alt="" />
        <div class="description">
          <h1 class="title">{title}</h1>
          <a href={linkGit}>Link github</a>
          <a href={linkSite}>Link siteweb</a>
        </div>        
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      
    </section>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const data = [
    {id: 1,		
     image: "/assets/images/proj-next.jpg",
	   title: "Projet next js",
     linkGit: "https://github.com/YevgeniyPolyakov1131/next-js-proj",
     linkSite: "https://next-js-proj.netlify.app/",
    },
    {id: 2,
     image: "/assets/images/proj1.jpg",
     title: "Projet PHP",
     linkGit: "https://github.com/YevgeniyPolyakov1131/proj2.git",
     linkSite: "http://monportfolio.ca/proj2/",
    },
    {id: 3,
     image: "/assets/images/proj-laravel.jpg",
     title: "Projet Laravel",
     linkGit: "https://github.com/YevgeniyPolyakov1131/lara.git",
     linkSite: "http://monportfolio.ca/lara/",
    },
    ]

  return (
    <>
      <section>
        <h1>Bonjour,</h1>
        <h1>Mon nom est Yevgeniy Polyakov.</h1>
        <h1>Je suis web développeur.</h1>
        <h1>Défilement vers le bas pour voir mes projets</h1>
        <h1 class="arrow-down"></h1>
      </section>
      {data.map((portfolio) => (
        <Section id={portfolio.id} image={portfolio.image} title={portfolio.title} linkGit={portfolio.linkGit} linkSite={portfolio.linkSite}/>
      ))}


      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}