import FormAddEdit from "./FormAddEdit";
const AddEditForm = (props) => {
  return (
    <div className="upload-container">
      <FormAddEdit course={props.course} />
    </div>
  );
};

export default AddEditForm;
