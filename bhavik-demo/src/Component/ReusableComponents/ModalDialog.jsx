import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalDialog = ({ show, data, ...props }) => {
    return (
        <>
            <Modal show={show} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data
                        ? Object.entries(data).map(([key, values]) => {
                            if (
                                typeof values === "object" &&
                                Array.isArray(values) &&
                                key === "Result"
                            ) {
                                console.log("values", values);
                            } else {
                                return (
                                    <React.Fragment key={key}>
                                        <h5>{key.toLocaleUpperCase()}</h5>
                                        <h6>{values}</h6>
                                    </React.Fragment>
                                );
                            }
                        })
                        : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDialog
