import { SelectCategory, SelectCategoriesPictures, SelectCategoriesGifs, SelectCountGalleryItem } from "features";

import { CATEGORY } from "shared/config/category-config";
import { Button, Stack } from "@mui/material";

type SearchBar = {
	selectType: string;
	setCountGet: (s: string) => void;
	setSelectType: (s: string) => void;
	setSelectedCategory: (s: string) => void;
	refetch: () => void;
};

export const SearchBarApp = ({ selectType, setCountGet, setSelectType, setSelectedCategory, refetch }: SearchBar) => {
	return (
		<Stack direction="row" justifyContent="center" spacing={2}>
			<SelectCategory onChange={setSelectType} />
			<SelectCountGalleryItem onChange={setCountGet} />
			{selectType === CATEGORY[0].value && <SelectCategoriesPictures onChange={setSelectedCategory} />}
			{selectType === CATEGORY[1].value && <SelectCategoriesGifs onChange={setSelectedCategory} />}
			<Button variant="contained" onClick={() => refetch()}>
				Refetch
			</Button>
		</Stack>
	);
};
