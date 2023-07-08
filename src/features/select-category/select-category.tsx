import { SelectChangeEvent } from "@mui/material";
import React from "react";
import { CATEGORY } from "shared/config/category-config";
import { SimpleSelect } from "shared/index";

type CategoriesProps = {
	onChange: (s: string) => void;
};

export const SelectCategory = ({ onChange }: CategoriesProps) => {
	const [value, setValue] = React.useState(CATEGORY[0].value);
	const handleChange = (e: SelectChangeEvent<any>) => {
		setValue(e.target.value);
	};

	React.useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<div>
			<SimpleSelect
				nameSelect="Type"
				label="Type"
				value={value}
				handleChange={handleChange}
				list={CATEGORY}
				propsStyled={{ width: "100px" }}
			/>
		</div>
	);
};
