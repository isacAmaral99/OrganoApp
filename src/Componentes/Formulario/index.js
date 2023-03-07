import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../Lista-suspensa";
import {v4 as uuidv4 } from "uuid"
import "./Formulario.css";

const Formulario = (props) => {
 

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    let colaborador = {
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time
    };
    
    props.aoColaboradorCadastrado({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
      favorito: false
    })
    setNome('')
    setCargo('...')
    setTime('')
    setImagem('')
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2> Preencha os dados para criar o card do colaborador </h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
         obrigatorio={true}
         label="Cargo"
         placeholder="Digite o seu cargo"
         valor={cargo} 
         aoAlterado={ valor => setCargo(valor)}
          
        />
        <Campo 
        label="Imagem" 
        placeholder="Insira o caminho da imagem" 
        valor={imagem} 
         aoAlterado={ valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label="Time" 
        itens={props.times} 
        valor={time} 
        aoAlterado={ valor => setTime(valor)}
        />
        <Botao> Criar Card </Botao>
      </form>
      <form onSubmit={(evento)=>{
        evento.preventDefault()
        props.cadastrarTime({nome:nomeTime,cor:corTime})
          }
        }>
        <h2> Preencha os dados para criar um novo time. </h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
       
        <Campo 
        type='color'
        label="Cor" 
        placeholder="Insira a cor do time" 
        valor={corTime} 
         aoAlterado={ valor => setCorTime(valor)}
        />
       
        <Botao> Criar Time </Botao>
      </form>
    </section>
  );
};

export default Formulario;
