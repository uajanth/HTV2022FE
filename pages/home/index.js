import Head from "next/head";
import styles from "../../styles/Login.module.css";
import Navbar from "../../src/components/Navbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.main}>
				<h1 className={styles.title}>Authenticated Page</h1>
			</main>
		</div>
	);
}
