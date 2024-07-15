import Image from "next/image";
import styles from "./index.module.css";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  const { textDate, datetime } = formatDate(date);
  return (
    <time className={styles.date} dateTime={datetime}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {textDate}
    </time>
  );
}
