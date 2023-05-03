import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContiner = styled(Container)`
    margin-top: 80px;
    text-align: center;
`

const StyledRow = styled(Row)`
    border-bottom: 1px solid #e8e9eb;
    display:flex;
    justify-content: space-evenly;
`

const circleDiv = styled.div`
    width: 60px;
    height: 60px;
    background-color: red;
    border: 1px solid red;
    border-radius: 100%;
`
export default function StoreListing() {
    return <>
        <StyledContiner>

            <StyledRow>
                <Row>
                    <Col xs='0.5'>
                    <circleDiv/>
                    </Col>
                    <Col>
                    <h5 style={{ fontWeight: 'bold'}}>Aldi</h5>
                    <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='0.5'>
                    <circleDiv/>
                    </Col>
                    <Col>
                    <h5 style={{ fontWeight: 'bold'}}>Vons</h5>
                    <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='0.5'>
                    <circleDiv/>
                    </Col>
                    <Col>
                    <h5 style={{ fontWeight: 'bold'}}>Sprouts</h5>
                    <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm='1'></Col>
            </StyledRow>
        </StyledContiner>
    </>
}