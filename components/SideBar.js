import { Container, Nav, Row, Button } from 'react-bootstrap'
import styles from '../styles/Dashboard.module.css'
import { MonetizationOn, Speed } from '@material-ui/icons';

export default function SideBar(props) {
    return (
        <Container className={styles.sidenav}>
            <Row>
                <Nav style={{justifyContent: "center", padding:"2.5%", textAlign: "center"}} defaultActiveKey={props.activekey} className="flex-column">
                    <Container style={{justifyContent: "center", padding:"2.5%", textAlign: "center", width:"100%"}}>
                        <h2>
                            ZeroCords
                        </h2>
                    </Container> {' '}<br/>
                    <Container style={{width:"100%", textAlign:"center"}}>
                        <Button variant="primary"><Speed/> Dashboard </Button>
                    </Container> {' '}<br/>
                    <Container style={{width:"100%", textAlign:"center"}}>
                        <Button variant="primary"><MonetizationOn/> Currency </Button>
                    </Container> {' '}<br/>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Row>
        </Container>
    )
}