import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para renderizar o fallback na próxima renderização.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log do erro para monitoramento (ex.: enviar para um serviço externo).
    this.setState({ errorInfo });
    console.error("ErrorBoundary capturou um erro:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderiza uma interface de fallback.
      return (
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <h1>Oops, algo deu errado!</h1>
          <p>Tente recarregar a página ou volte mais tarde.</p>
          {this.state.error && (
            <details style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
              <summary>Detalhes do erro</summary>
              <p>{this.state.error.toString()}</p>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    // Renderiza os componentes filhos normalmente.
    return this.props.children;
  }
}

export default ErrorBoundary;
