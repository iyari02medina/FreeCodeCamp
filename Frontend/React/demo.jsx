// ### 1.  Crear un elemento JSX simple

// React usa una extensión de sintaxis de JavaScript llamada JSX que le permite escribir HTML directamente dentro de JavaScript. debido a que JSX es una extensión sintáctica de JavaScript, en realidad puede escribir JavaScript directamente dentro de JSX. Para hacer esto, simplemente incluya el código que desea que se trate como JavaScript entre llaves: { 'this is treated as JavaScript code' }

const JSX = <h1>Hello JSX!</h1>;

// ### 2. Crear un elemento JSX complejo

// Una cosa importante que debe saber sobre JSX anidado es que debe devolver un solo elemento. Este elemento principal envolvería todos los demás niveles de elementos anidados. Por ejemplo, varios elementos JSX escritos como elementos del mismo nivel que no tienen un elemento contenedor primario no se transpilarán.

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>;

const JSX2 = <div>
    <h1>Hola mundo!</h1>
    <p>aprendiendo react</p>
    <ul>
        <li>japlin</li>
        <li>trufa</li>
        <li>charly</li>
    </ul>
</div>

// ### 3. Agregar comentarios en JSX

// Para poner comentarios dentro de JSX, usa la sintaxis {/* */} para envolver el texto del comentario.

// ### 4. Renderizar elementos HTML al DOM

// Con React, podemos renderizar este JSX directamente al HTML DOM usando la API de renderizado de React conocida como ReactDOM. ReactDOM ofrece un método simple para representar elementos React en el DOM que se ve así: ReactDOM.render(componentToRender, targetNode) donde el primer argumento es el elemento o componente React que desea representar, y el segundo argumento es el nodo DOM en el que desea representar el componente. .

// Como era de esperar, ReactDOM.render()debe llamarse después de las declaraciones de elementos JSX, al igual que debe declarar variables antes de usarlas.

// ### 5. Definir una clase HTML en JSX

// Una diferencia clave en JSX es que ya no puede usar la palabra classpara definir clases HTML. Esto se debe a que classes una palabra reservada en JavaScript. En cambio, JSX usa className.

const JSX3 = (
  <div className = 'myDiv' >
    <h1>Add a class to this div</h1>
  </div>
);

// ### 6. Más información sobre las etiquetas JSX de cierre automático

// En JSX, las reglas son un poco diferentes. Cualquier elemento JSX se puede escribir con una etiqueta de cierre automático y todos los elementos deben estar cerrados. La etiqueta de salto de línea, por ejemplo, siempre debe escribirse como <br />para que sea un JSX válido que se pueda transpilar. A <div>, por otro lado, se puede escribir como <div />o <div></div>. La diferencia es que en la primera versión de sintaxis no hay forma de incluir nada en el archivo <div />.

const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// ### 7. Crear un componente funcional sin estado

// Los componentes son el núcleo de React. Todo en React es un componente y aquí aprenderás a crear uno.

// Hay dos formas de crear un componente React. La primera forma es usar una función de JavaScript. Definir un componente de esta manera crea un componente funcional sin estado . piense en un componente sin estado como uno que puede recibir datos y representarlos, pero no administra ni realiza un seguimiento de los cambios en esos datos. simplemente escriba una función de JavaScript que devuelva JSX o null. Una cosa importante a tener en cuenta es que React requiere que el nombre de su función comience con una letra mayúscula.
// Debido a que un componente JSX representa HTML, puede juntar varios componentes para crear una página HTML más compleja. Esta es una de las ventajas clave de la arquitectura de componentes que proporciona React. Le permite componer su interfaz de usuario a partir de muchos componentes separados y aislados. Esto facilita la creación y el mantenimiento de interfaces de usuario complejas.

const MyComponent = function() {
  return(
    <div>Completed challenge!</div>
);
}

// ### 8. Crear un componente de react 

// La otra forma de definir un componente de React es con la classsintaxis de ES6. En el siguiente ejemplo, Kittenextends React.Component:

// class Kitten extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <h1>Hi</h1>
//     );
//   }
// }
// Esto crea una clase ES6 Kittenque amplía la React.Componentclase. Por lo tanto, la Kittenclase ahora tiene acceso a muchas características útiles de React, como enlaces de estado local y ciclo de vida.También observe que la Kittenclase tiene un constructordefinido dentro que llama a super(). Se utiliza super()para llamar al constructor de la clase padre, en este caso React.Component. El constructor es un método especial que se utiliza durante la inicialización de objetos que se crean con la classpalabra clave. Es una buena práctica llamar a un componente constructorcon supery pasarpropsa ambos. Esto asegura que el componente se inicialice correctamente.

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
  }
};

// ### 9. Crear un componente con composición

// Ahora veremos cómo podemos componer varios componentes de React juntos. Imagine que está creando una aplicación y ha creado tres componentes: a Navbar, Dashboardy Footer.
// Para componer estos componentes juntos, puede crear un App componente principal que represente cada uno de estos tres componentes como elementos secundarios . Para representar un componente como elemento secundario en un componente de React, incluya el nombre del componente escrito como una etiqueta HTML personalizada en el JSX. Por ejemplo, en el rendermétodo podrías escribir:
// return (
//  <App>
//   <Navbar />
//   <Dashboard />
//   <Footer />
//  </App>
// )
// Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto < />como en este ejemplo)

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
