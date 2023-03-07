import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = (props) =>{

    
    
    return(
        //tudo que esta aqui dentro é JSX
        (props.colaboradores.length) ?  <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input value={props.cor} type='color' className='input-cor' onChange={evento => props.mudarCorDoTime(evento.target.value,props.id)} />
            <h3 style={{borderColor:props.cor }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {
                    props.colaboradores.map((colaborador,index) => 
                        {
                            
                            return <Colaborador 
                            key={index}
                            id={colaborador.id}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            cor={props.cor}
                            aoDeletar ={props.aoDeletar}
                            /> 
                            
                        }
                )}
            </div>
        </section>
        : ''
    ) 

}

export default Time;