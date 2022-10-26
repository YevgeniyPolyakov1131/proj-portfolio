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

function Section({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
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
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
  ]

  return (
    <>
      <section>
        <h1>Bonjour,</h1>
        <h1>je m'appelle Yevgeniy Polyakov.</h1>
        <h1>Je suis web développeur.</h1>
        <h1>Défilement vers le bas pour voir mes projets</h1>
        <h1 class="arrow-down"></h1>
      </section>
      {data.map((portfolio) => (
        <Section id={portfolio.id} />
      ))}


      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}