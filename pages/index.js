import Head from "next/head";
import Image from "next/image";
import Container from "../components/container/container";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";

export default function Home() {
  return (
    <Container>
        <Banner></Banner>
    </Container>
  )
}
