import { type ComponentChildren, Component, type ErrorInfo } from "preact";
import RouteErrorPage from "./RouteErrorPage";

type ErrorBoundaryProps = {
  children: ComponentChildren;
};
type ErrorBoundarySate = {
  hasError: boolean;
};
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundarySate
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: unknown, _errorInfo: ErrorInfo): void {
    if (error instanceof Response) {
      throw error;
    }
    console.error("caught by boundary: ", error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <RouteErrorPage />;
    }

    return this.props.children;
  }
}
