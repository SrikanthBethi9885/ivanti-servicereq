import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LineChart from '../../Charts/LineChart';
import Barchart from '../../Charts/BarChart';

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

const Purchases = () => {

    return (
        <div className="content">
            {/* Other content specific to Purchases component */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '1198px', height: '72px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '32px' }}>Purchase Overview</span>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '16px' }}>Stats are Displayed from the last 12 months.</span>
                </div>
                <Box sx={{ width: '205px', height: '36px', marginRight: '411px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={age}
                            label="All Status"
                        //onChange={handleChange}
                        >
                            <MenuItem value={10}>Active</MenuItem>
                            <MenuItem value={20}>Closed</MenuItem>
                            <MenuItem value={30}>In Progress</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <Grid container spacing={2}>
                <Grid style={{
                    width: '225px',
                    height: '131px',
                    backgroundColor: '#FFFFFF',
                    marginTop: '50px',
                    marginRight: '18px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <img src='Icon_Total_Revenue.png' width='64px' height='64px' style={{ marginRight: '16px', marginLeft: '16px' }} />
                    <div>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: 'bolder' }}>Purchase Count</Typography>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '24px', fontWeight: 'bolder' }}>1113</Typography>
                    </div>
                </Grid>



                <Grid style={{
                    width: '225px',
                    height: '131px',
                    backgroundColor: '#FFFFFF',
                    marginTop: '50px',
                    marginRight: '18px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <img src='Icon_Total_Revenue1.png' width='64px' height='64px' style={{ marginRight: '16px', marginLeft: '16px' }} />
                    <div>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: 'bolder' }}>Completed</Typography>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '24px', fontWeight: 'bolder' }}>1113</Typography>
                    </div>
                </Grid>
                <Grid style={{
                    width: '225px',
                    height: '131px',
                    backgroundColor: '#FFFFFF',
                    marginTop: '50px',
                    marginRight: '18px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <img src='clock-alt-2-svgrepo-com.png' width='50px' height='50px' style={{ marginRight: '16px', marginLeft: '16px' }} />
                    <div>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: 'bolder' }}>InProgress</Typography>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '24px', fontWeight: 'bolder' }}>1113</Typography>
                    </div>
                </Grid>
                <Grid style={{
                    width: '225px',
                    height: '131px',
                    backgroundColor: '#FFFFFF',
                    marginTop: '50px',
                    marginRight: '18px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <img src='Icon_Total_Revenue2.png' width='64px' height='64px' style={{ marginRight: '16px', marginLeft: '16px' }} />
                    <div>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: 'bolder' }}>Open Orders</Typography>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '24px', fontWeight: 'bolder' }}>1113</Typography>
                    </div>
                </Grid>
                <Grid style={{
                    width: '225px',
                    height: '131px',
                    backgroundColor: '#FFFFFF',
                    marginTop: '50px',
                    marginRight: '18px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <img src='Icon_Total_Revenue3.png' width='64px' height='64px' style={{ marginRight: '16px', marginLeft: '16px' }} />
                    <div>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '16px', fontWeight: 'bolder' }}>Total Spend</Typography>
                        <Typography style={{ fontFamily: 'poppins', fontSize: '24px', fontWeight: 'bolder' }}>1113</Typography>
                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={2} style={{ display: 'flex', gap: '19px' }}>

                <Grid container spacing={2} style={{ width: '468px', height: '331px', backgroundColor: '#FFFFFF', marginTop: '32px', marginRight: '16px', marginLeft: '2px' }}>
                    {/* Content for the first grid */}
                    <Typography style={{ fontFamily: 'poppins', fontWeight: '600', fontSize: '20px', marginLeft: '24px', marginBottom: '32px', marginTop: '32px' }}>Total Spend Analysis</Typography>
                    <Barchart />
                </Grid>
                <Grid container spacing={2} style={{ width: '711px', height: '331px', backgroundColor: '#FFFFFF', marginTop: '32px' }}>
                    <Typography style={{ fontFamily: 'poppins', fontWeight: '600', fontSize: '20px', marginLeft: '24px', marginBottom: '32px', marginTop: '32px' }}>Sales Figures</Typography>
                    <LineChart />
                    {/* Content for the second grid */}
                </Grid>
            </Grid>
            {/* <Grid container spacing={2} style={{ display: 'flex', gap: '19px' }}>
                <Grid container spacing={2} style={{ width: '468px', height: '222px', backgroundColor: '#FFFFFF', marginTop: '32px', marginRight: '16px', marginLeft: '2px' }}>
                    <Typography style={{ fontFamily: 'poppins', fontWeight: '600', fontSize: '20px', marginLeft: '24px', marginBottom: '32px', marginTop: '32px' }}>Total Spend Analysis</Typography>
                </Grid>
                <Grid container spacing={2} style={{ width: '711px', height: '222px', backgroundColor: '#FFFFFF', marginTop: '32px' }}>
                    <Typography style={{ fontFamily: 'poppins', fontWeight: '600', fontSize: '20px', marginLeft: '24px', marginBottom: '32px', marginTop: '32px' }}>Average Total Sales</Typography>
                </Grid>
            </Grid> */}

            <TableContainer component={Paper} style={{ marginTop: '10px', marginLeft: '-20px' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Order #</StyledTableCell>
                            <StyledTableCell align="right">EPro#</StyledTableCell>
                            <StyledTableCell align="right">JDE#</StyledTableCell>
                            <StyledTableCell align="right">MCPC Ref</StyledTableCell>
                            <StyledTableCell align="right">Date Opened</StyledTableCell>
                            <StyledTableCell align="right">Date Closed</StyledTableCell>
                            <StyledTableCell align="right">DateFor SLA</StyledTableCell>
                            <StyledTableCell align="right">Days Open</StyledTableCell>
                            <StyledTableCell align="right">Hour Open</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">SLA Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell>1</StyledTableCell>
                            <StyledTableCell>&EPro#</StyledTableCell>
                            <StyledTableCell>JDE# Data</StyledTableCell>
                            <StyledTableCell>MCPC Ref Data</StyledTableCell>
                            <StyledTableCell>Date Opened Data</StyledTableCell>
                            <StyledTableCell>Date Closed Data</StyledTableCell>
                            <StyledTableCell>DateFor SLA Data</StyledTableCell>
                            <StyledTableCell>Days Open Data</StyledTableCell>
                            <StyledTableCell>Hour Open Data</StyledTableCell>
                            <StyledTableCell>Status Data</StyledTableCell>
                            <StyledTableCell>SLA Status Data</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>2</StyledTableCell>
                            <StyledTableCell>&EPro#</StyledTableCell>
                            <StyledTableCell>JDE# Data</StyledTableCell>
                            <StyledTableCell>MCPC Ref Data</StyledTableCell>
                            <StyledTableCell>Date Opened Data</StyledTableCell>
                            <StyledTableCell>Date Closed Data</StyledTableCell>
                            <StyledTableCell>DateFor SLA Data</StyledTableCell>
                            <StyledTableCell>Days Open Data</StyledTableCell>
                            <StyledTableCell>Hour Open Data</StyledTableCell>
                            <StyledTableCell>Status Data</StyledTableCell>
                            <StyledTableCell>SLA Status Data</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell>3</StyledTableCell>
                            <StyledTableCell>&EPro#</StyledTableCell>
                            <StyledTableCell>JDE# Data</StyledTableCell>
                            <StyledTableCell>MCPC Ref Data</StyledTableCell>
                            <StyledTableCell>Date Opened Data</StyledTableCell>
                            <StyledTableCell>Date Closed Data</StyledTableCell>
                            <StyledTableCell>DateFor SLA Data</StyledTableCell>
                            <StyledTableCell>Days Open Data</StyledTableCell>
                            <StyledTableCell>Hour Open Data</StyledTableCell>
                            <StyledTableCell>Status Data</StyledTableCell>
                            <StyledTableCell>SLA Status Data</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Purchases
