import { Container, ImageList, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CATEGORIES_IMAGES, CATEGORY, CATEGORY_GIFS, COUNT_ITEM } from "shared/config/category-config";
import { SearchBarApp } from "widgets";
import { getPic } from "./api/getPic";
import { ImageListItem } from "features/index";

export const Home = () => {
	const [selectType, setSelectType] = React.useState(CATEGORY[0].value);
	const [countGet, setCountGet] = React.useState(COUNT_ITEM[1].value);
	const [selectedCategory, setSelectedCategory] = React.useState(CATEGORIES_IMAGES[2].value);
	const { data, refetch } = useQuery({
		queryKey: ["gallery", selectType, selectedCategory, countGet],
		queryFn: () => getPic(selectedCategory, countGet),
		retry: 3,
		refetchOnWindowFocus: false,
	});

	return (
		<Container>
			<SearchBarApp
				selectType={selectType}
				setSelectType={setSelectType}
				countGet={countGet}
				setCountGet={setCountGet}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				refetch={refetch}
			/>

			<Stack direction="row" spacing={2}>
				{data ? (
					<ImageList variant="masonry" cols={3} gap={8}>
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
