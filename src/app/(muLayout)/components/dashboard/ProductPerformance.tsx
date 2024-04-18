import React from "react";
import {Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

const products = [
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "1",
        name: "Test",
        post: "Test",
        pname: "Test",
        priority: "Test",
        pbg: "primary.main",
        budget: "3.9",
    },
];

const ProductPerfomance = () => {
    return (
        <BaseCard title="Basic Table">
            <TableContainer
                sx={{
                    width: {
                        xs: "274px",
                        sm: "100%",
                    },
                }}
            >
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2,
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Призначений
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Імя
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    Пріоритет
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography color="textSecondary" variant="h6">
                                    Бюджет
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography fontSize="15px" fontWeight={500}>
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Box>
                                            <Typography fontSize="14px" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography color="textSecondary" fontSize="13px">
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" fontSize="14px">
                                        {product.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            pl: "4px",
                                            pr: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography fontSize="14px">{product.budget}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </BaseCard>
    );
};

export default ProductPerfomance;
