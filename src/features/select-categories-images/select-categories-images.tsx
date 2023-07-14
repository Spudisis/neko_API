import { SimpleSelect } from "shared/index";

import { SelectChangeEvent } from "@mui/material";

import { CATEGORIES_IMAGES } from "shared/config/category-config";
import React from "react";

type CategoriesProps = {
	onChange: (s: string) => void;
	value: string;
};

export const SelectCategoriesPictures = ({ onChange, value }: CategoriesProps) => {
	const handleChange = (e: SelectChangeEvent<any>) => {
		onChange(e.target.value);
	};

	return (
		<SimpleSelect
			nameSelect="Categories images"
			label="Categories images"
			value={value}
			handleChange={handleChange}
			list={CATEGORIES_IMAGES}
			propsStyled={{ width: "200px" }}
		/>
	);
};
