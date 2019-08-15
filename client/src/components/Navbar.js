import React from 'react';
import {Box, Text, Heading, Image} from 'gestalt';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={70}
        color="blue"
        padding={1}
        shape="roundedBottom">
        <NavLink activeClassName="active" to="/">
            <Box display="flex" alignItems="center">
                <Box height={50} width={50}>
                    <Image
                        alt="brewhaha logo"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="./icons/logo.svg"
                    />
                </Box>
                <Heading size="xs" color="orange">
                    BrewHaha
                </Heading>
            </Box>
        </NavLink>
        <NavLink activeClassName="active" to="/signin">
            <Text size="x1" color="white">
                Sign In
            </Text>
        </NavLink>
        <NavLink activeClassName="active" to="/signup">
            <Text size="x1" color="white">
                Sign Up
            </Text>
        </NavLink>
    </Box>
);

export default Navbar;