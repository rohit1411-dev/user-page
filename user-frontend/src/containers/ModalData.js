import Button from 'react-bootstrap/Button';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
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
                    <TextField fullWidth type='text' name='title' size='30' placeholder='Title' onChange={handleInput} defaultValue={!add ? rowData.title : ''} />
                    <br />
                    <TextField fullWidth type='text' name='description' size='100' placeholder='Description' onChange={handleInput}
                        defaultValue={!add ? rowData.description : ''} />
                    <br />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            name="status"
                            onChange={handleInput}
                        >
                            <MenuItem value={'Done'}>Done</MenuItem>
                            <MenuItem value={'Progress'}>Progress</MenuItem>
                        </Select>
                    </FormControl>
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