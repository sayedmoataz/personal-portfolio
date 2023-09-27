import React, { useState } from 'react'
import styled from '@mui/material/styles/styled'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import {
    Download,
    Link
} from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { ColorButton } from './button.js'
import resume from './../assets/pdf/resume.pdf'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        color: '#FAFAFA',
        backgroundColor: '#22536F',
        fontWeight: 700,
        borderRadius: 6,
        marginTop: 1,
        minWidth: 180,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: '#1e1e1e',
                marginRight: 2,
            },
        },
    },
}))

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <Box>
            <ColorButton
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleClick}
            >
                Resume
            </ColorButton>
            <StyledMenu
                id="resume-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'resume-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    component={"a"}
                    href='https://docs.google.com/document/d/1ZVKtWKO7fh6csbRjYcLXriAlIA9lcXPnO6Z9buhObXA/edit?usp=sharing'
                    target="_blank"
                    disableRipple
                    sx={{ '&:hover': { backgroundColor: '#368F80' } }}
                >
                    <Link />
                    <Typography ml={1}>Visit (.docx)</Typography>
                </MenuItem>
                <MenuItem
                    component={"a"}
                    href={resume}
                    download='Mohammed Moataz Resume'
                    target='_blank'
                    rel='noreferrer'
                    disableRipple
                    sx={{ '&:hover': { backgroundColor: '#368F80' } }}
                >
                    <Download />
                    <Typography ml={1}>Download (.pdf)</Typography>
                </MenuItem>
            </StyledMenu>
        </Box>
    )
}
