import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Welcome from './Components/Welcome'
import { Container, Row, Col } from "react-bootstrap";
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Container>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;