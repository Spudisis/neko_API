import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
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
	background-color: #434343;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img`
	max-width: 90vw;
	max-height: 90vh;
	object-fit: "contain";
`;

type FullImageScreen = {
	changeStatusModal: (b: boolean) => void;
};

export const FullScreenImage = ({
	artist_href,
	artist_name,
	source_url,
	url,
	changeStatusModal,
}: ImageRequest & FullImageScreen) => {
	const data = { artist_href, artist_name, source_url, url };
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
					</StyledModal>
				</BackGround>,
				document.body
			)}
		</>
	);
};
