import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";

type SimpleSelect = {
	value: string;
	label: string;
	nameSelect: string;
	handleChange: (n: SelectChangeEvent<string>) => void;
	list: { label: string; value: string }[];
	propsStyled?: PropsStyled;
};

type PropsStyled = {
	width?: string;
	backgroundColor?: string;
};

const StyledFormControl = styled(FormControl)((props: PropsStyled) => ({
	width: props.width || "auto",
	backgroundColor: props.backgroundColor || "inherit",
}));

export const SimpleSelect = ({ value, nameSelect, label, handleChange, list, propsStyled }: SimpleSelect) => {
	return (
		<StyledFormControl {...propsStyled}>
			<InputLabel id="demo-simple-select-label">{nameSelect}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				label={label}
				onChange={handleChange}
			>
				{list.map((item, index) => (
					<MenuItem key={index} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</StyledFormControl>
	);
};
