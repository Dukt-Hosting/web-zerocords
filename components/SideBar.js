import { Container, Nav, Row } from 'react-bootstrap'
import styles from '../styles/Dashboard.module.css'

export default function SideBar(props) {
    return (
        <Container className={styles.sidebar} style={{ width: "20%", height: "100%" }}>
            <Row>
                <Nav defaultActiveKey={props.activekey} className="flex-column">
                    <Nav.Link href="/dhasboard">Active</Nav.Link>
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