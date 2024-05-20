import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history('/');
    };

    return (
        <>
            <div className="error">
                <Container className="error-container d-flex justify-content-center text-center">
                    <Row>
                        <Col>
                            <h1 className="display-1">404</h1>
                            <h2 className="mb-4">Page Not Found</h2>
                            <p className="mb-4">
                                The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                            </p>
                            <Button variant="primary" onClick={handleGoBack}>Go to Home</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default NotFoundPage;
