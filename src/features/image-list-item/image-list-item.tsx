import { Box, Button, ButtonGroup, Link, Stack, styled } from "@mui/material";
import { FullScreenImage } from "entities/Full-screen-image/Full-screen-image";
import { Image } from "entities/Image";
import React from "react";
import { ImageRequest } from "shared/api/types";

const Wrapper = styled(Box)`
	position: relative;
`;

const HoveredImage = styled(Box)`
	transition: 0.3s ease-in-out all;
`;
const AbsoluteImage = styled(Box)`
	left: 0px;
	top: 0px;
	z-index: 1000;
	position: absolute;
	transition: 0.3s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`;

const StyledLink = styled(Link)`
	display: block;
	width: 100%;
	height: 100%;
	text-decoration: none;
	color: black;
`;

export const ImageListItem = (data: ImageRequest) => {
	const { artist_href, artist_name, source_url, url } = data;
	const [statusHover, setStatusHover] = React.useState(false);
	const [statusOpenImage, setStatusOpenImage] = React.useState(false);

	const handleClick = () => {
		setStatusOpenImage(!statusOpenImage);
	};

	return (
		<Wrapper>
			<HoveredImage onMouseEnter={() => setStatusHover(true)} onMouseLeave={() => setStatusHover(false)}>
				<Image {...data} />
				{statusHover && (
					<AbsoluteImage onClick={handleClick}>
						<Image {...data} />
					</AbsoluteImage>
				)}
			</HoveredImage>
			{statusOpenImage && (
				<FullScreenImage {...data} changeStatusModal={setStatusOpenImage}>
					<Stack direction="row" justifyContent="center">
						<ButtonGroup size="large" color="secondary" variant="contained" aria-label="buttons info about image">
							<Button>
								<StyledLink href={artist_href} target="_blank">
									Artist: {artist_name}
								</StyledLink>
							</Button>
							<Button>
								<StyledLink href={source_url} target="_blank">
									Source
								</StyledLink>
							</Button>
							<Button>
								<StyledLink href={url} target="_blank">
									Image
								</StyledLink>
							</Button>
						</ButtonGroup>
					</Stack>
				</FullScreenImage>
			)}
		</Wrapper>
	);
};
