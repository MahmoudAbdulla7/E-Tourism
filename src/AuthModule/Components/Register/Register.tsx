import { BsPersonVcardFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../SharedModules/Components/Button/Button";
import Input from "../../../SharedModules/Components/Input/Input";
import Passsword from "../../../SharedModules/Components/Password/Passsword";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../SharedModules/Components/ErrorMessage/ErrorMessage";

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log({ data });
  };
  return (
    <div className="h-screen text-white flex items-center justify-center text-center">
      <div className="w-full ">
        <div className="w-[100%] flex items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 lg:w-3/4">
            <h2 className="text-2xl my-3 font-semibold">Register</h2>

            <div className="name-inputs  my-4 flex justify-between ">
              <Input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "FirstName is required",
                  minLength: {
                    value: 2,
                    message: "First name should be greater than two letters ",
                  },
                  maxLength: {
                    value: 8,
                    message: "First name should be less than eight letters",
                  },
                })}
                children={<BsPersonVcardFill />}
              />
              {errors?.firstName && (
                <ErrorMessage text={String(errors?.firstName.message)} />
              )}
              <Input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", {
                  required: "LastName is required",
                  minLength: {
                    value: 2,
                    message: "Last name should be greater than two letters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Last name should be less than eight letters",
                  },
                })}
                children={<BsPersonVcardFill />}
              />
              {errors?.lastName && (
                <ErrorMessage text={String(errors?.lastName.message)} />
              )}
            </div>

            <div className="email-input  my-4  flex items-center">
              <div className="w-[98%]">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid Email Format",
                    },
                  })}
                  children={<MdOutlineMailOutline />}
                />
              </div>
              {errors?.email && (
                <ErrorMessage text={String(errors?.email.message)} />
              )}
            </div>

            <div className="password-input my-4 flex items-center">
              <div className="w-[98%]">
              <Passsword
                placeholder="Enter your Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/,
                    message: `The password must include at least one lowercase letter,
                one uppercase letter, one digit, one special character,
                and be at least 6 characters long!!`,
                  },
                })}
              />
              </div>
              {errors?.password && (
                <ErrorMessage text={String(errors?.password.message)} />
              )}
            </div>
            <div className="confirm-pass input my-4 flex items-center">
              <div className="w-[98%]">
              <Passsword
                placeholder="Enter your Confirm Password"
                {...register("confirmPassword", {
                  required: "ConfirmPassword is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/,
                    message: `The Confirm Password must include at least one lowercase letter,
                one uppercase letter, one digit, one special character,
                and be at least 6 characters long!!`,
                  },
                  validate: {
                    checkConfirmationPassHandler: (value) => {
                      const { password } = getValues();
                      return (
                        password === value ||
                        "Password And ConfirmPassword doesn't match"
                      );
                    },
                  },
                })}
              />
              </div>
              {errors?.confirmPassword && (
                <ErrorMessage text={String(errors?.confirmPassword.message)} />
              )}
            </div>

            <Button text="Register" />

            <div className="flex justify-between">
              <p>
                have an account ?
                <Link to={"/auth/login"}>
                  <span className="underline mx-2">Log in Now</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
