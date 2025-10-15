export default function Section({titulo = "Section1", children = "Teste1112"}) {
  return (
    <div className="flex flex-wrap mb-3 flex-col bg-blue-950">
        <h1>{titulo}</h1>
        <div className="flex gap-5">
          {"Produtos em destaque:"}
        </div>
        
    </div>
  )
}
