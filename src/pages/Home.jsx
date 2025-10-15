import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";





export default function Home() {
  const [electronics, GuardaItem] = useState([]);
  const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API}/electronics`)
      .then(response => response.json())
      .then(data => GuardaItem(data));
  }, []);
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <Section titulo="Eletronicos"  >
        {electronics.map((PegaItem) => {
          return (
            <Card {...PegaItem} />
          );
        })}
        </Section>

         <Section titulo="Roupas" >
        {electronics.map((PegaItem) => {
          return (
            <Card {...PegaItem} />
          );
        })}
        </Section>

         <Section titulo="Joias">
        {electronics.map((PegaItem) => {
          return (
            <Card {...PegaItem} />
          );
        })}
        </Section>
       
    </div>
  );
}
