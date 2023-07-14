import { SelectChangeEvent } from "@mui/material";

import { CATEGORIES_IMAGES, CATEGORY, CATEGORY_GIFS } from "shared/config/category-config";
import { SimpleSelect } from "shared/index";

type CategoriesProps = {
	onChange: (s: string) => void;
	value: string;
	changeCategory: (s: string) => void;
};

export const SelectCategory = ({ onChange, value, changeCategory }: CategoriesProps) => {
	const handleChange = (e: SelectChangeEvent<any>) => {
		const newValue = e.target.value;
		onChange(newValue);
		if (newValue === "images") {
			changeCategory(CATEGORIES_IMAGES[2].value);
		} else if (newValue === "gifs") {
			changeCategory(CATEGORY_GIFS[1].value);
		}
	};

	return (
		<SimpleSelect
			nameSelect="Type"
			label="Type"
			value={value}
			handleChange={handleChange}
			list={CATEGORY}
			propsStyled={{ width: "100px" }}
		/>
	);
};
