import { Theme } from "@mui/material";

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[8],
          borderRadius: "4px",
        },
        listbox: {
          "& .MuiAutocomplete-option": {
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        },
      },
    },
    AutocompleteListbox: {},
  };
}
