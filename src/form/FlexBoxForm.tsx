import { ChangeEvent } from "react";
import { Box } from "@material-ui/core";
import { useFormik } from "formik";
import "./styles.css";

interface IFieldBaseProps {
  label: string;
  id: string;
  value?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  [key: string]: any;
}

interface IInputFieldProps extends IFieldBaseProps {}
interface ISelectFieldProps extends IFieldBaseProps {
  list: string[];
}

function Input(props: IInputFieldProps) {
  const { label, id, ...rest } = props;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...rest} />
    </div>
  );
}

function Select(props: ISelectFieldProps) {
  const { label, id, list, ...rest } = props;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...rest}>
        {list.map((x: string, i: number) => (
          <option key={`${id}-${i}`}>{x}</option>
        ))}
      </select>
    </div>
  );
}

function FlexBoxForm({ getFieldValues }: any) {
  const formik = useFormik({
    initialValues: {
      maxWidth: "1024px",
      alignSelf: "left",
      alignContent: "center"
    },
    onSubmit: getFieldValues
  });

  return (
    <form noValidate onChange={formik.handleSubmit} autoComplete="off">
      <h2 style={{ margin: "1rem", textAlign: "left" }}>Flex Box Form</h2>
      <Box className="form-fields-container">
        <Input
          label="Max Width"
          id="maxWidth"
          value={formik.values.maxWidth}
          onChange={formik.handleChange}
        />
        <Select
          label="Align Self"
          id="alignSelf"
          list={["left", "right", "center"]}
          value={formik.values.alignSelf}
          onChange={formik.handleChange}
        />
        <Select
          label="Align Content"
          id="alignContent"
          list={["left", "right", "center", "around", "between", "even"]}
          value={formik.values.alignContent}
          onChange={formik.handleChange}
        />
      </Box>
    </form>
  );
}

export { FlexBoxForm };
export default FlexBoxForm;
