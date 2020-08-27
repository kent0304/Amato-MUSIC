import React, { useEffect, useState } from "react";
import styles from "./GlobalMenu.module.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const GlobalMenu = (props) => {
  const [turningScrollpos, setTurningScrollpos] = useState(40);
  const [scrolled, setScrolled] = useState(false);

  // スクロールを認知したらhandleScrollを実行
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // スクロールしているのか否か判断する関数
  const handleScroll = () => {
    // window.pageYOffsetは垂直方向のスクロール量
    // currentScrollPosはスクロールした量
    const currentScrollPos = window.pageYOffset;
    const scrolled = turningScrollpos < currentScrollPos;
    setScrolled(scrolled);
  };

  return (
    <div className={`${styles.menubar} ${scrolled ? styles.hidden : null}`}>
      <div className={styles.namebox}>
        <Link to="artists">
          <h1
            className={`${styles.title} ${
              scrolled ? styles.hidden_title : null
            }`}
          >
            Amato MUSIC
          </h1>
        </Link>
      </div>

      <div className={styles.menu}>
        <nav>
          <ul>
            <MediaQuery query="(max-width: 479px)">
              <li>
                <Link to="/profile">
                  <i className="fas fa-user"></i>My Profile
                </Link>
              </li>
            </MediaQuery>
            <MediaQuery query="(mix-width: 480px)">
              <li>
                <Link to="/profile">
                  <i className="fas fa-user"></i>My Profile
                </Link>
              </li>
              <li>
                <Link to="/artists">
                  <i className="fas fa-home"></i>Home
                </Link>
              </li>
            </MediaQuery>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default GlobalMenu;
