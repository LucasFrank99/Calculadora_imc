import { useState } from "react";


const Calculadora = () => {
    let [peso, setPeso] = useState(0)
    let [altura, setAltura] = useState(0)
    let [imc, setImc] = useState(null)

    const CalculaIMC = () => {
        const alturaReal = altura / 100
        const eleva = alturaReal * alturaReal 
        const resultado = peso / eleva 
        setImc(resultado)
        
        return resultado; 
    };
        
    

    return (
        <form>
            <input type="number" placeholder="Sua altura (cm)" onChange={evento => setAltura(parseInt(evento.target.value))} ></input> 
            <input type="number" placeholder="Seu peso (kg)" onChange={evento => setPeso(parseInt(evento.target.value))}></input>
            <button type="button"  onClick={CalculaIMC} >Calcular</button>


            <div>
                <h2>Seu imc é: {imc}</h2>
                <table border="4">
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abaixo de 18,5</td>
                <td>Peso baixo</td>
              </tr>
              <tr>
                <td>18,5 a 24,9</td>
                <td>Peso normal</td>
              </tr>
              <tr>
                <td>25 a 29,9</td>
                <td>Sobrepeso</td>
              </tr>
              <tr>
                <td>30 a 34,9</td>
                <td>Obesidade I</td>
              </tr>
              <tr>
                <td>35 a 39,9</td>
                <td>Obesidade II</td>
              </tr>
              <tr>
                <td>Acima de 40</td>
                <td>Obesidade III</td>
              </tr>
            </tbody>
          </table>
            </div>
        </form>
        
    )
}

export default Calculadora