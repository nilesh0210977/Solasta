import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import udghosh from "../assets/udghosh.png";
import logo from "../assets/logo.png";
// import "./styles/Navbar.css";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {

	function goToHash(id) {

		const element = document.getElementById(id);
		const header = document.getElementById("header");
		window.scrollTo({ top: element?.offsetTop - header.offsetHeight });
		setSection(id);
		setActive(false);
	}

	const [active, setActive] = useState(false);
	const [section, setSection] = useState("home");

	return (
		<>
			<header className="desktopNav">
				<nav id="NavBar" className="navbar">
					<img src={logo} alt="Blogger Logo" className="logo-img" />
					<div className="middle-box">
					{/* <Link to="/" className="nav-link" onClick={() => goToHash("grid-section")}></Link> */}
						<Link to="/" className={`nav-link ${section === 'home' && 'active'}`} onClick={() => goToHash('home')} >
							<Icon icon='material-symbols:home-outline'  className="nav-link-icon"/>
							<span className="nav-link-text"> Home</span>
						</Link>
						<Link to="/events" onClick={() => setSection('events')}  className={`nav-link ${section === 'events' && 'active'}`}>
							<Icon icon='mdi:events' className="nav-link-icon" />
							<span className="nav-link-text">Events</span>
						</Link>
						<Link to="/" className={`nav-link ${section === 'grid-section' && 'active'}`} onClick={() => goToHash("grid-section")}>
							<Icon icon="carbon:user-sponsor" className="nav-link-icon" />

							<span className="nav-link-text">Sponsor</span>
						</Link>
						<Link to="/" className={`nav-link ${section === 'about-section' && 'active'}`} onClick={() => goToHash("about-section")}>
							<Icon icon="bytesize:portfolio" className="nav-link-icon"/>
							<span className="nav-link-text">About</span>
						</Link>
						<Link to="/teams" onClick={() => setSection("Teams")}   className={`nav-link ${section === 'Teams' && 'active'}`} >
						<Icon  icon="clarity:group-line"  className="nav-link-icon"/>
							<span className="nav-link-text">Teams</span>
						</Link>
					</div>
					<img src={udghosh} className="udgosh-img" alt="logo-img"/>
				</nav>
				<div className="nav-slide"></div>
			</header>

			<header className={styles.header} id="header">
				<main>
					<aside className={styles["left-side"]}>
						<img src={logo} alt="Blogger Logo" className="logo-img" />
					</aside>



					<aside className={styles["mob-nav"]}>
						<div
							className={styles.icons}
							data-active={active}
							onClick={() => setActive((prev) => !prev)}
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 30 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={styles.opened}
							>
								<path
									d="M30 20.0075C30 20.8325 29.331 21.5 28.5075 21.5H16.4925C16.0967 21.5 15.717 21.3428 15.4371 21.0629C15.1572 20.783 15 20.4033 15 20.0075C15 19.6117 15.1572 19.232 15.4371 18.9521C15.717 18.6722 16.0967 18.515 16.4925 18.515H28.5075C29.3325 18.515 30 19.1825 30 20.0075ZM30 11C30 11.825 29.331 12.4925 28.5075 12.4925H1.4925C1.09666 12.4925 0.717041 12.3353 0.437143 12.0554C0.157245 11.7755 0 11.3958 0 11C0 10.6042 0.157245 10.2245 0.437143 9.94464C0.717041 9.66475 1.09666 9.5075 1.4925 9.5075H28.5075C29.3325 9.5075 30 10.1765 30 11ZM28.5075 3.485C28.9033 3.485 29.283 3.32775 29.5629 3.04786C29.8428 2.76796 30 2.38834 30 1.9925C30 1.59666 29.8428 1.21704 29.5629 0.937143C29.283 0.657245 28.9033 0.5 28.5075 0.5H10.4925C10.2965 0.5 10.1024 0.538605 9.92134 0.61361C9.74027 0.688615 9.57573 0.798551 9.43714 0.937143C9.29855 1.07573 9.18861 1.24027 9.11361 1.42135C9.0386 1.60242 9 1.7965 9 1.9925C9 2.1885 9.0386 2.38258 9.11361 2.56366C9.18861 2.74473 9.29855 2.90927 9.43714 3.04786C9.57573 3.18645 9.74027 3.29638 9.92134 3.37139C10.1024 3.44639 10.2965 3.485 10.4925 3.485H28.5075Z"
									fill="currentColor"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								className={styles.closed}
							>
								<path
									fill="currentColor"
									d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Zm3.446 4.897l.084.073a.75.75 0 0 1 .073.976l-.073.084L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072Z"
								/>
							</svg>
						</div>
						<nav className={`${styles["middle-side"]} ${styles.mob}`}
							data-active={active}>
							<div>
								<Link to="/" className="nav-link" onClick={() => goToHash("grid-section")}>
									Sponsor Us
								</Link>
								<Link to="/" className="nav-link" onClick={() => goToHash("about-section")}>
									About
								</Link>
								<Link to="/" className="nav-link" onClick={() => goToHash("Contact")}>
									Contact Us
								</Link>
								<Link to="/events" className="nav-link">
									Events
								</Link>
								<img src={udghosh} className="udgosh-img" />
							</div>
						</nav>
					</aside>
				</main>
			</header>

			<Outlet />
		</>
	);
};
export default Navbar;
