"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav
        id="menu-drawer"
        className={cx(styles.nav, isOpen && styles.open)}
        aria-hidden={!isOpen}
        // hidden={isOpen ? undefined : true}
        // {...{ inert: isOpen ? undefined : "" }}
      >
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button
          className={cx(styles.button, styles.close)}
          type="button"
          onClick={close}
          aria-expanded={isOpen}
          aria-controls="menu-drawer"
        >
          <Image
            src="/close.svg"
            alt="メニューを閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button
        className={styles.button}
        type="button"
        onClick={open}
        aria-expanded={isOpen}
        aria-controls="menu-drawer"
      >
        <Image src="/menu.svg" alt="メニューを開く" width={24} height={24} />
      </button>
    </div>
  );
}
