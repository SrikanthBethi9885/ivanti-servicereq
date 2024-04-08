import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

interface ServiceRequest {
    serviceReqNumber: string;
    recId: string;
    insertDate: number;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.breakpoints.up('md')}`]: {
        fontFamily: 'poppins', // Set font style to Poppins
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0C5C56',
        color: theme.palette.common.white,
        textAlign: 'center', // Center-align the header cells
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'center', // Center-align the body cells
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Orders() {
    const [jsonData, setJsonData] = useState<ServiceRequest[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        fetch('http://localhost:3000/assets')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data: ServiceRequest[]) => {
                setJsonData(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredItems = jsonData ? jsonData.filter(item =>
        item.serviceReqNumber.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.recId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formatDate(item.insertDate).toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <input type="text" className="search-field" placeholder="Search here..." value={searchQuery} onChange={handleSearch} />
                </Grid>
                <Grid item>
                    <div style={{ fontWeight: '700' }}>Total Service Reqs Migrated: {jsonData && jsonData.length}</div>
                </Grid>
                <Grid item>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="contained" style={{ backgroundColor: '#0C5C56', marginRight: '5px' }} onClick={prevPage}>Previous</Button>
                        <Button variant="contained" onClick={nextPage} style={{ backgroundColor: '#0C5C56' }}>Next</Button>
                    </div>
                </Grid>

            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700, }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>S.No #</StyledTableCell>
                            <StyledTableCell align="right">Service Req Number</StyledTableCell>
                            <StyledTableCell align="right">Rec ID</StyledTableCell>
                            <StyledTableCell align="right">Insert Date</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentItems.map((item: ServiceRequest, index: number) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{index + 1}</StyledTableCell>
                                <StyledTableCell>{item.serviceReqNumber}</StyledTableCell>
                                <StyledTableCell>{item.recId}</StyledTableCell>
                                <StyledTableCell>{formatDate(item.insertDate)}</StyledTableCell>
                                <StyledTableCell>Active</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default Orders;
