import { useState } from "react";
import {v4 as uuidv4 } from "uuid"
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Rodape from "./Componentes/Rodape";
import Time from "./Componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id){
    console.log(id)
    setColaboradores(colaboradores.filter(colaborador=> colaborador.id !== id))
  }


  const aoNovoColaboradorAdicionado = (colaborador) => {

    
   
    setColaboradores([...colaboradores,colaborador])
  };
  const [times,setTimes] = useState([
    {
            
            id: uuidv4(),
            nome: 'Programação',
            cor: '#57C278'
        },
        {
           id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA'
        },
        {
           id: uuidv4(),
            nome: 'Data Science',
            cor: '#A6D157'
        },
        {
           id: uuidv4(),
            nome: 'Devops',
            cor: '#E06B69'
        },
        {
           id: uuidv4(),
            nome: 'UX e Design',
            cor: '#DB6EBF'
        },
        {
           id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05'
        },
        {
             id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29'
        },
  ]);

   
  function mudarCorDoTime(cor,id){
    setTimes(times.map(time =>{
      
      if(time.nome === id){
        time.cor = cor
      }
      return time
    }))

  }

  function cadastrarTime(novoTime){
    setTimes([...times,{...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){

    setColaboradores(colaboradores.map(colaborador=>{
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
    
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time =>time.nome )}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time,indice) => 
        <Time 
          key={time.id} 
          nome={time.nome} 
         
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCorDoTime = {mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      )}
      <Rodape/>
      {/* <Time nome="Programação"/>
      <Time nome="Front-end"/> */}
    </div>
  );
}

export default App;
