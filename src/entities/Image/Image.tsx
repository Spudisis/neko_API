import { ImageListItem } from "@mui/material";

import { ImageRequest } from "shared/api/types";

export const Image = ({ artist_name, url }: ImageRequest) => {
	return (
		<ImageListItem>
			<img
				src={`${url}?w=248&fit=crop&auto=format`}
				srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
				alt={artist_name}
				loading="lazy"
			/>
		</ImageListItem>
	);
};
