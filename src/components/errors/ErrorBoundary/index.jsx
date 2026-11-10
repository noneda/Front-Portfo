import { Component } from "react";
import ErrorFallback from "../ErrorFallback";

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(
      `[${this.props.name ?? "Componente"}]`,
      error,
      info.componentStack,
    );
  }

  reset = () => this.setState({ error: null });

  render() {
    if (this.state.error) {
      return (
        this.props.fallback ?? (
          <ErrorFallback name={this.props.name} onRetry={this.reset} />
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
