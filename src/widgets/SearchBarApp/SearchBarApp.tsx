import { SelectCategory, SelectCategoriesPictures, SelectCategoriesGifs, SelectCountGalleryItem } from "features";

import { CATEGORY } from "shared/config/category-config";
import { Button, Stack, styled } from "@mui/material";

type SearchBar = {
	selectType: string;
	setCountGet: (s: string) => void;
	countGet: string;
	setSelectType: (s: string) => void;
	selectedCategory: string;
	setSelectedCategory: (s: string) => void;
	refetch: () => void;
};

const StyledStack = styled(Stack)`
	flex-direction: row;
	justify-content: center;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const SearchBarApp = ({
	selectType,
	setCountGet,
	countGet,
	setSelectType,
	selectedCategory,
	setSelectedCategory,
	refetch,
}: SearchBar) => {
	return (
		<StyledStack>
			<SelectCategory onChange={setSelectType} value={selectType} changeCategory={setSelectedCategory} />
			<SelectCountGalleryItem onChange={setCountGet} value={countGet} />
			{selectType === CATEGORY[0].value && (
				<SelectCategoriesPictures onChange={setSelectedCategory} value={selectedCategory} />
			)}
			{selectType === CATEGORY[1].value && (
				<SelectCategoriesGifs onChange={setSelectedCategory} value={selectedCategory} />
			)}
			<Button variant="contained" onClick={() => refetch()}>
				Refetch
			</Button>
		</StyledStack>
	);
};
