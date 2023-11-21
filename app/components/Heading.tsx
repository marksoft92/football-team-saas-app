"use client";
import styles from "../assets/styles/components/heading.module.scss";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
console.log(styles);
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className={styles.title}>{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
