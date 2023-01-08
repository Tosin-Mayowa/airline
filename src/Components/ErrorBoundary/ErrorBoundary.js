import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false,err:'' };
    }

    static getDerivedStateFromError(error) {
        
        return { hasError: true,err:error };
    }

/*     componentDidCatch(error, info) {
        
        logErrorToMyService(error, info.componentStack);
    } */

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                <h2>Smething went wroong {this.state.err}</h2>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;