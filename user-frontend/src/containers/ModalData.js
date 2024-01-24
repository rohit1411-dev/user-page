import Button from 'react-bootstrap/Button';
import { TextField } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';

function ModalData({ show, handleClose, EditValues, add, AddValues, rowData }) {
    const data = {};
    function handleInput(e) {
        data[e.target.name] = e.target.value;
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{add ? 'Add Titles' : 'Edit Titles'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextField type='text' name='title' placeholder='Title' onChange={handleInput} defaultValue={!add ? rowData.title : ''} />
                    <br />
                    <TextField type='text' name='description' placeholder='Description' onChange={handleInput}
                        defaultValue={!add ? rowData.description : ''} />
                    <br />
                    <TextField type='text' name='status' placeholder='Status' onChange={handleInput}
                        defaultValue={!add ? rowData.status : ''} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={add ? () => AddValues(data) : () => EditValues(data, rowData.id)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalData;