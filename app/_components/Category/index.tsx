import type { Category } from "@/app/_libs/microcms";

import styles from "./index.module.css";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return <b className={styles.tag}>{category.name}</b>;
}
