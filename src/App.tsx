import "./App.css";
import { useUser } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import Landing from "./pages/Landing";
// import { dark } from "@clerk/themes";

function App() {
  const { user } = useUser();
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/auth"> {user? "Welcome! " :  "please sign in to your account "} </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                {user? <Dashboard />:   <Landing/>}

              </FinancialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
