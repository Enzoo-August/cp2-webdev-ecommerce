import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";





export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const API = import.meta.env.API;

  useEffect(() => {
    fetch(`${API}react&per_page=5`)
      .then((res) => res.json())
      .then((data) => setReactRepos(data.items));
  }, []);
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <Section titulo="Eletronicos"  >
        {reactRepos.map((PegaItem) => {
          return (
            <Card {...PegaItem} />
          );
        })}
        </Section>

         <Section titulo="Roupas" >
        {reactRepos.map((PegaItem) => {
          return (
            <Card {...PegaItem} />
          );
        })}
        </Section>

         <Section titulo="Joias">
        {reactRepos.map((PegaItem) => {
          return (
            <Card {...PegaItem} />
          );
        })}
        </Section>
       
    </div>
  );
}
