import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Rodape from "./Componentes/Rodape";
import Time from "./Componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(){
    console.log("deletando o colaborador")
  }


  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
  };
  const [times,setTimes] = useState([
    {
            nome: 'Programação',
            cor: '#57C278'
        },
        {
            nome: 'Front-End',
            cor: '#82CFFA'
        },
        {
            nome: 'Data Science',
            cor: '#A6D157'
        },
        {
            nome: 'Devops',
            cor: '#E06B69'
        },
        {
            nome: 'UX e Design',
            cor: '#DB6EBF'
        },
        {
            nome: 'Mobile',
            cor: '#FFBA05'
        },
        {
            nome: 'Inovação e Gestão',
            cor: '#FF8A29'
        },
  ]);

  function mudarCorDoTime(cor,nome){
    setTimes(times.map(time =>{
      if(time.nome === nome){
        time.cor = cor
      }
      return time
    }))

  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time =>time.nome )}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time,indice) => 
        <Time 
          key={indice} 
          nome={time.nome} 
         
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCorDoTime = {mudarCorDoTime}
        />
      )}
      <Rodape/>
      {/* <Time nome="Programação"/>
      <Time nome="Front-end"/> */}
    </div>
  );
}

export default App;
