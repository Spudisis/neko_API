import { ImageListItem } from "@mui/material";
import React from "react";

import { ImageRequest } from "shared/api/types";

export const Image = ({ artist_name, url }: ImageRequest) => {
	const [load, statusLoad] = React.useState(false);
	const styles = { visibility: "hidden", maxHeight: "0px", maxWidth: "0px" };
	return (
		<ImageListItem>
			<img
				style={!load ? (styles as React.CSSProperties) : undefined}
				src={`${url}?w=248&fit=crop&auto=format`}
				srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
				alt={artist_name}
				onLoad={() => statusLoad(true)}
				loading="lazy"
			/>
		</ImageListItem>
	);
};
