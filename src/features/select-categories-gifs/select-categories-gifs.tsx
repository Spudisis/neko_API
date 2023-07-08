import React from "react";
import { SimpleSelect } from "shared/index";

import { SelectChangeEvent } from "@mui/material";
import { CATEGORY_GIFS } from "shared/config/category-config";

type CategoriesProps = {
	onChange: (s: string) => void;
};

export const SelectCategoriesGifs = ({ onChange }: CategoriesProps) => {
	const [value, setValue] = React.useState(CATEGORY_GIFS[0].value);
	const handleChange = (e: SelectChangeEvent<any>) => {
		setValue(e.target.value);
	};

	React.useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<div>
			<SimpleSelect
				nameSelect="Categories gif"
				label="Categories gif"
				value={value}
				handleChange={handleChange}
				list={CATEGORY_GIFS}
				propsStyled={{ width: "200px" }}
			/>
		</div>
	);
};
