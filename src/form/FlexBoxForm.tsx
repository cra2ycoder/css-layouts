import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    formBox: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      padding: "0 0 1rem 1rem"
    }
  })
);

function FlexBoxForm() {
  const classes = useStyles();

  return (
    <>
      <h2 style={{ margin: "1rem", textAlign: "left" }}>Flex Box Form</h2>
      <Box className={classes.formBox}>
        <TextField id="maxWidth" name="maxWidth" label="max width" />
        <FormControl className={classes.formControl}>
          <InputLabel id="align-self">Align Self</InputLabel>
          <Select labelId="align-self" id="align-self">
            {["left", "right", "center"].map((x: string, i: number) => (
              <MenuItem key={`mi-${i}`} value={x.toLowerCase()}>
                {x}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="align-content">Align Content</InputLabel>
          <Select labelId="align-content" id="align-content">
            {["left", "right", "center", "around", "between", "even"].map(
              (x: string, i: number) => (
                <MenuItem key={`mia-${i}`} value={x.toLowerCase()}>
                  {x}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export { FlexBoxForm };
export default FlexBoxForm;
