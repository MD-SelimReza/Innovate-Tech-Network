import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProfileUpdate = (data) => {
    const { name, image } = data;
    profileUpdate(name, image).then(() => {
      navigate("/");
      alert("profile successfully updated");
    });
  };

  return (
    <form className="card-body w-96 py-8 space-y-3">
      <h2 className="text-3xl font-bold mb-3 text-center">Customize Profile</h2>
      <div className="form-control">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-50">This field is required.</span>
        )}
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered"
          {...register("image")}
        />
      </div>
      <div onClick={handleSubmit(handleProfileUpdate)} className="form-control">
        <button className="btn btn-primary">Save</button>
      </div>
    </form>
  );
};

export default UpdateProfile;
