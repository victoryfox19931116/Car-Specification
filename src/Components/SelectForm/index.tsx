import { memo } from "react";
import { Field } from "formik";

const SelectForm = (props: { name: string; data: string[] }) => {
  return (
    <Field
      as="select"
      name={props.name}
      className="block w-full mt-[25px] border-2 rounded-sm"
    >
      {props.data.map((item: string, _index: number) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </Field>
  );
};

export default memo(SelectForm);