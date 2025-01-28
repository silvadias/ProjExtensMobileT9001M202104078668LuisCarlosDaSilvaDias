import React from "react";

function App() {
  // Exemplo de erro para testar o ErrorBoundary.
  const simulateError = () => {
    throw new Error("Simulação de erro na aplicação!");
  };

  return (
    <div>
      <h1>Bem-vindo ao App</h1>
      <button onClick={simulateError}>Clique aqui para testar o erro</button>
    </div>
  );
}

export default App;
