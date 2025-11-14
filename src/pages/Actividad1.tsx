import Navbar from '../components/Navbar'
import '../Home.css'

function Actividad1() {
  return (
    <div className="home">
      <Navbar />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
        <img 
          src="/actividad1.png" 
          alt="Actividad 1" 
          style={{ maxWidth: '300px', height: 'auto', flexShrink: 0 }}
        />
        <h1 className="main-title" style={{ textAlign: 'left', margin: 0, flex: 1 }}>
          El futuro del trabajo: inteligencia humana + inteligencia no humana
        </h1>
      </div>
      
      <section className="content-block">
        <div className="text-content">
          <p>
            Empiezo subrayando que la opinión de la autora Lorena Rojas en su conferencia "Reflexiones sobre la vida, la tecnología y las inteligencias no humanas", responde al rol de mediadora entre los humanos y la utilidad de las inteligencias no humanas, ya que expone los pros y los contras del uso de estas, pero presenta de manera clara cuales son los puntos fuertes que pueden ser explotados como herramienta de crecimiento y los puntos débiles que invitan al individuo a mantener su autonomía.
          </p>

          <p>
            Es importante entender que la inteligencia es un concepto creado por el ser humano, lo que la define como una cualidad que forma parte únicamente de la capacidad humana. Si nos basamos en este criterio, no existirían las inteligencias no humanas.
          </p>

          <p>
            Como bien lo expone la autora, las inteligencias no humanas pueden servir a la humanidad como apoyo ya que ambas operan en escalas muy distintas, siendo las humanas inferiores si se tienen en cuenta criterios como velocidad, memoria, cálculo, comunicación, etc. Ahora bien, si vemos la utilidad de las mismas con base en la necesidad de la psicología organizacional, podríamos servirnos de su capacidad en tareas fundamentales en la globalización: como la ampliación de los constructos organizacionales que se emplean desde la psicología como conductas, desempeño laboral y coexistencia en la organización, todo esto con el fin de agregar valor a la entidad propia utilizando ejemplos similares previamente probados por otras organizaciones, lo que reduce el riesgo de fracaso y el gasto en el proceso de adaptación en los niveles de productividad.
          </p>

          <p>
            Es fundamental entender que las inteligencias (humanas y no humanas) podrían aumentar de manera exponencial sus capacidades si se enlazaran y se aplicaran criterios de todas para cumplir con los requisitos de la vida diaria, es decir, si la mayoría de los humanos tuvieran la humildad de aceptar las aportaciones de inteligencias que no pertenecen al gremio humano y la disposición de capacitarse para extraer la mayor utilidad de las mismas, los niveles de la inteligencia humana podrían aumentar en gran medida y beneficiar a la propia humanidad.
          </p>
          
          <br />

          <p>Si desea ver la conferencia completa, puede dar click al siguiente  <a target='_blank' href="https://www.youtube.com/watch?v=gN05JyyVdQo">enlace</a></p>

          <p>Si desea ver esta opinión en el Campus ULA, puede dar click al siguiente <a target='_blank' href="https://campusula.net/mod/forum/discuss.php?d=16443#p27972">enlace</a></p>
        </div>
      </section>
    </div>
  )
}

export default Actividad1

