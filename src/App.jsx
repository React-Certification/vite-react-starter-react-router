import Router from "./Router.jsx";

export default function App() {
  return (
    <div className="app-container" data-testid="app-container">
      <div className="app-header">
        <h1 className="app-title">Cert template app</h1>
      </div>
      <Router />
    </div>
  );
}
