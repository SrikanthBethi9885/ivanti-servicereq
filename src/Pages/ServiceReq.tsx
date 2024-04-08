import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, IconButton } from '@mui/material';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

interface ServiceRequest {
    serviceReqNumber: string;
    recId: string;
    insertDate: number;
}

const ServiceReq = () => {
    const [jsonData, setJsonData] = useState<ServiceRequest[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);
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

    return (
        <div className="flex">
            <div className="flex-1 p-0 bg-white-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl text-teal-700 font-semibold">Service Requests</h2>
                    {error && <p className="text-red-500">Error: {error}</p>}
                    <Typography variant="subtitle1" gutterBottom className="text-2xl ml-auto text-teal-700 font-semibold">
                        Total Service Requests Migrated to MCPC: {jsonData && jsonData.length}
                    </Typography>
                </div>
                {jsonData && (
                    <>
                        <div className="mt-0 flex justify-end mb-1 text-teal-700">
                            <input
                                type="text"
                                placeholder="Search Service Reqs"
                                className="mr-2 px-3 py-2 border border-teal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <button
                                disabled={currentPage === 1}
                                onClick={() => paginate(currentPage - 1)}
                                className="flex items-center px-4 py-2 text-gray-700 bg-white border border-teal-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                            >
                                <MdOutlineNavigateBefore className="w-4 h-4 mr-1" />
                                Previous
                            </button>
                            <button
                                disabled={indexOfLastItem >= filteredItems.length}
                                onClick={() => paginate(currentPage + 1)}
                                className="flex items-center px-4 py-2 ml-2 text-gray-700 bg-white border border-teal-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                            >
                                Next
                                <MdOutlineNavigateNext className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                        <Grid container spacing={0} alignItems="center">
                            <Grid item style={{ backgroundColor: 'white', width: '200px', height: '50px', marginRight: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid teal' }}>
                                <Typography variant="subtitle1" style={{ color: 'teal' }}><CardGiftcardIcon />         Total Service Reqs {jsonData && jsonData.length}</Typography>
                            </Grid>
                            <Grid item style={{ backgroundColor: 'white', width: '200px', height: '50px', marginRight: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid teal' }}>
                                <Typography variant="subtitle1" style={{ color: 'black' }}><CardGiftcardIcon /> Total Assets</Typography>
                            </Grid>
                            <Grid item style={{ backgroundColor: 'white', width: '200px', height: '50px', marginRight: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid teal' }}>
                                <Typography variant="subtitle1" style={{ color: 'black' }}><MarkEmailReadOutlinedIcon />         Emails</Typography>
                            </Grid>
                            <Grid item style={{ backgroundColor: 'white', width: '200px', height: '50px', marginRight: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid teal' }}>
                                <Typography variant="subtitle1" style={{ color: 'black' }}><SwapVertIcon /> Sort</Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper className="p-2">
                                    <div className="grid grid-cols-3 gap-2 text-teal-700 font-semibold">
                                        <div className="bg-gray-300 p-2">Service Request Number</div>
                                        <div className="bg-gray-300 p-2">RecId</div>
                                        <div className="bg-gray-300 p-2">Insert Date</div>
                                    </div>
                                </Paper>
                            </Grid>
                            {currentItems.map((item, index) => (
                                <Grid item xs={12} key={index}>
                                    <Paper className="p-2">
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="bg-gray-100 p-2">{item.serviceReqNumber}</div>
                                            <div className="bg-gray-100 p-2">{item.recId}</div>
                                            <div className="bg-gray-100 p-2">{formatDate(item.insertDate)}</div>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </div>
        </div>
    );
}

export default ServiceReq;
