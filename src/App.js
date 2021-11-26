import { Col, Container, Row } from "react-bootstrap";
import {NavbarComponent, Hasil, ListCategories} from './components'

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>

      <div className="mt-2">
        <Container fluid>
          <Row>
            <ListCategories></ListCategories>
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
            </Col>
            <Hasil></Hasil>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
