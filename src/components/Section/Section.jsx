import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from './Section.module.scss'
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import View from '../View/View';
import Data from '../Data/Data';
import Search from '../Search/Search';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black.padding,
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '16px',
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    number,
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { number, name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'Locomotive', 'admin: Under Astralag', 'active', 'Success',),
    createData(2, 'Locomotive', 'admin: Aron Yakobishvili', 'active', 'Success',),
    createData(3, 'Locomotive', ' admin: Diego Cochen', 'active', 'Success',),
    createData(4, 'Locomotive  ', 'admin: Marc-Andre ter Stegen', 'active', 'Success',),
    createData(5, 'Locomotive', 'admin: Alex Balde', 'active', 'Success',),
];

export default function CustomizedTables() {
    const [data, setData] = useState(false)
    const [search, setSearch] = useState(false)
    const [delet, setDelet] = useState(false)
    const [user, setUser] = useState(false)
    return (
        <TableContainer component={Paper} style={{ width: '1440px', margin: '100px', marginLeft: '50px', marginRight: '50px' }}  >
            <div className={s.project_header}>
                <div className={s.project_header_flex}>
                    <th>футболные поля </th>
                    <th className={s.icons}><FaMinus /><FaTimes /></th>
                </div>
            </div>
            <div className={s.tableResponsive}>
                <Table sx={{ minWidth: '100%' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{
                                padding: '10px'
                            }}><p>№</p></StyledTableCell>
                            <StyledTableCell ><p style={{ marginLeft: '-10px' }}> Название</p></StyledTableCell>
                            <StyledTableCell ><p>Администраторы</p></StyledTableCell>
                            <StyledTableCell ><p>Type</p></StyledTableCell>
                            <StyledTableCell ><p>Posted-Date</p></StyledTableCell>
                            <StyledTableCell ><p>Last Date To Apply</p></StyledTableCell>
                            <StyledTableCell ><p>Статус</p></StyledTableCell>
                            <StyledTableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody className={s.display}>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell className={s.padding} component="th" scope="row"><p>{row.number}</p></StyledTableCell>
                                <StyledTableCell className={s.project_width} component="th" scope="row"><p>{row.name}</p></StyledTableCell>
                                <StyledTableCell className={s.project_width_200}><p>{row.calories}</p></StyledTableCell>
                                <StyledTableCell ><p>full-time</p></StyledTableCell>
                                <StyledTableCell ><p>12-01-2023</p></StyledTableCell>
                                <StyledTableCell ><p>30-01-2023</p></StyledTableCell>
                                <StyledTableCell className={s.project_width300}>
                                    <button className={s.project_succes}><p>{row.fat}</p></button>
                                </StyledTableCell>
                                <StyledTableCell >

                                </StyledTableCell>
                                <div className={s.project_flex_button}>
                                    <button onClick={() => setData(!data)} className={s.project_button_green}><IoEyeSharp size={20} /></button>
                                    <button onClick={() => setUser(!user)} className={s.project_button_aqua}><HiOutlinePencilSquare size={20} /></button>
                                    <button onClick={() => setSearch(!search)} className={s.project_button_red}><MdDelete size={20} /></button>
                                </div>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {
                search && (
                    <Search />
                )
            }
            {
                user && (
                    <View />
                )
            }
            {
                data && (
                    <Data />
                )
            }
        </TableContainer >

    );
}

