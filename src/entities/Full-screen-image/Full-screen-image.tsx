import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import { createPortal } from "react-dom";
import { ImageRequest } from "shared/api/types";

const StyledModal = styled(Box)`
	height: auto;
`;

const BackGround = styled(Box)`
	position: fixed;
	left: 0px;
	top: 0px;
	height: 100vh;
	width: 100vw;
	z-index: 1001;
	background-color: #2929298a;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img`
	max-width: 90vw;
	max-height: 80vh;
	object-fit: "contain";
`;

type FullImageScreen = {
	changeStatusModal: (b: boolean) => void;
	children: ReactElement;
};

export const FullScreenImage = ({
	artist_name,
	url,
	changeStatusModal,
	children,
}: ImageRequest & FullImageScreen) => {
	const refModal = React.useRef<HTMLDivElement>();
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (refModal.current && !refModal.current.contains(e.target as Node)) {
			changeStatusModal(false);
		}
	};

	return (
		<>
			{createPortal(
				<BackGround onClick={handleClick}>
					<StyledModal ref={refModal}>
						<StyledImg src={url} alt={artist_name} />
						<div>{children}</div>
					</StyledModal>
				</BackGround>,
				document.body
			)}
		</>
	);
};
