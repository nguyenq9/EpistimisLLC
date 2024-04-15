import Image from "next/image";
import styles from "./page.css";
import Title from "@/Components/Title/Title";
import MapContainer from "@/Components/MapContainer/MapContainer";

export default function Home() {
  return (
    <main className="whole-bg">
      <Title/>
      <MapContainer/>
    </main>
  );
}