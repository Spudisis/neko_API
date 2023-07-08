import { useQuery } from "@tanstack/react-query";
import {
	SelectCategory,
	SelectCategoriesPictures,
	SelectCategoriesGifs,
	SelectCountGalleryItem,
	ImageListItem,
} from "features";
import React from "react";
import { getPic } from "./api/getPic";
import { CATEGORIES_IMAGES, CATEGORY, COUNT_ITEM } from "shared/config/category-config";
import { Container, ImageList, Stack } from "@mui/material";
import { ImageRequest } from "shared/api/types";
import { Image } from "entities/Image";
import { useInView } from "react-intersection-observer";

export const Gallery = () => {
	const [selectType, setSelectType] = React.useState(CATEGORY[1].value);
	const [countGet, setCountGet] = React.useState(COUNT_ITEM[1].value);
	const [selectedCategory, setSelectedCategory] = React.useState(CATEGORIES_IMAGES[0].value);
	const { data, isSuccess } = useQuery({
		queryKey: ["gallery", selectType, selectedCategory, countGet],
		queryFn: () => getPic(selectedCategory, countGet),
		retry: 3,
		refetchOnWindowFocus: false,
	});

	return (
		<Container>
			<Stack direction="row" justifyContent="center" spacing={2} >
				<SelectCategory onChange={setSelectType} />
				<SelectCountGalleryItem onChange={setCountGet} />
				{selectType === CATEGORY[0].value && <SelectCategoriesPictures onChange={setSelectedCategory} />}
				{selectType === CATEGORY[1].value && <SelectCategoriesGifs onChange={setSelectedCategory} />}
			</Stack>

			<Stack direction="row" spacing={2}>
				{data ? (
					<ImageList variant="masonry" cols={Math.ceil(data.results.length / 5)} gap={8}>
						{data.results.map((image) => (
							<ImageListItem key={image.url} {...image} />
						))}
					</ImageList>
				) : (
					<div>Loading...</div>
				)}
			</Stack>
		</Container>
	);
};
