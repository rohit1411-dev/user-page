import BootstrapTable from 'react-bootstrap-table-next';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalData from './ModalData';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useNavigate } from 'react-router-dom';

const TaskDisplay = () => {
    Axios.defaults.headers['x-access-token'] = localStorage.getItem('user_access_token');
    const username = localStorage.getItem('username');
    const [data, setData] = useState([]);
    const [add, setAdd] = useState(false);
    const [show, setShow] = useState(false);
    const [rowData, setRowData] = useState([]);
    const navigate = useNavigate();

    const handleClose = () => {
        setAdd(false);
        setShow(false);
    }


    const onEdit = (row) => {
        setRowData(row);
        setShow(true);
    }

    const onLogout = () => {
        localStorage.clear();
        navigate('/')
    }

    const onAdd = () => {
        setAdd(true);
        setShow(true);
    }

    const formatWithIcon = (cell, row) => {
        return (
            <>
                <FontAwesomeIcon icon={faEdit} onClick={() => onEdit(row)} />&nbsp;&nbsp;
                <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(row)} />
            </>
        )
    }

    const EditValues = (data, id) => {
        data['userId'] = localStorage.getItem('userId');
        Axios.patch(`http://localhost:8080/api/task/data/${id}/`, data).then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log(error);
        });
        setShow(false);
    }

    const AddValues = (data) => {
        data['userId'] = parseInt(localStorage.getItem('userId'));
        Axios.post(`http://localhost:8080/api/task/add`, data).then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log(error);
        });
        setShow(false);
        setAdd(false);
    }

    const onDelete = (row) => {
        const id = row.id;
        const userId = localStorage.getItem('userId');
        Axios.delete(`http://localhost:8080/api/task/data/${id}/${userId}`).then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    const columns = [{
        dataField: 'title',
        text: 'Title',
        sort: true
    }, {
        dataField: 'description',
        text: 'Description',
        sort: true
    }, {
        dataField: 'status',
        text: 'Status',
        sort: true
    },
    {

        dataField: 'actions',
        text: 'Actions',
        isDummyField: true,
        csvExport: false,
        formatter: formatWithIcon,
    }
    ];

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        Axios.get(`http://localhost:8080/api/task/all/${userId}`).then((res) => {
            setData(res.data)
        }).catch(() => {
            console.log('Error')
        });
    }, []);

    return (
        <>
            <div>
                <h3 style={{ textAlign: 'center' }}>{`Username -> ${username[0].toUpperCase() + username.slice(1)}`}</h3>

            </div>
            <div >
                <Button variant="primary" style={{ float: 'left', marginLeft: '10px' }} onClick={onAdd}>Add Title</Button>
                <Button variant="secondary" style={{ float: 'right', marginRight: '20px' }} onClick={onLogout} >Logout</Button>
                <br /><br />
                <BootstrapTable keyField='id' data={data} columns={columns}
                    striped hover condensed
                    pagination={paginationFactory()}
                />
                {show && <ModalData show={show} handleClose={handleClose} EditValues={EditValues} add={add}
                    AddValues={AddValues} rowData={rowData} />}
            </div>
        </>
    )
}
export default TaskDisplay; 
