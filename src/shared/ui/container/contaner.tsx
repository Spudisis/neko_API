import { Box, styled } from "@mui/material";
import React, { ReactElement } from "react";

type ContainerType = {
	children: ReactElement;
};

const StyledButton = styled(Box)({
	width: "1280px",
	margin: "0 auto",
});

export const Container = ({ children }: ContainerType) => {
	return <StyledButton>{children}</StyledButton>;
};
