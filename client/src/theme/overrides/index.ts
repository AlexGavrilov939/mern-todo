import { Theme } from "@mui/material";
import Alert from "./Alert";
import Autocomplete from "./Autocomplete";
import Backdrop from "./Backdrop";
import Button from "./Button";
import Card from "./Card";
import Cssbaseline from "./CssBaseline";
import Dialog from "./Dialog";
import Input from "./Input";
import Link from "./Link";
import List from "./List";
import Popover from "./Popover";
import Select from "./Select";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Alert(theme),
    Autocomplete(theme),
    Backdrop(theme),
    Button(theme),
    Card(theme),
    Cssbaseline(),
    Dialog(theme),
    Input(theme),
    Link(),
    List(theme),
    Popover(theme),
    Select(theme)
  );
}
