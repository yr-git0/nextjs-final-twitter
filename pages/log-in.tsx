import { useForm } from "react-hook-form";
import Introduction from "../components/introduction";
import Tab from "../components/tab";
import useMutation from "../libs/client/useMutation";
import { cls } from "../libs/client/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface MutationResult {
  ok: boolean;
  type?: string;
  message?: string;
}

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();
  const [login, { data }] = useMutation<MutationResult>("/api/users/login");

  const onValid = (validForm: LoginForm) => {
    login(validForm);
  };

  useEffect(() => {
    if (data) {
      if (data.ok) {
        router.push("/");
      } else if (!data.ok) {
        setError(data.type === "email" ? "email" : "password", {
          type: "invalid" + data.type,
          message: data.message,
        });
      }
    }
  }, [data, router]);

  return (
    <div className="w-full flex">
      <Introduction />
      <div className="p-32">
        <Tab />
        <form
          onSubmit={handleSubmit(onValid)}
          className="w-80 h-full -mt-5 flex flex-col justify-center gap-3"
        >
          <div>
            <label
              htmlFor="email"
              className={cls(
                "block mb-2 text-sm font-medium",
                errors.email ? "text-red-800" : "text-gray-900"
              )}
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className={cls(
                    "w-4 h-4",
                    errors.email ? "text-red-800" : "text-gray-500"
                  )}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                {...register("email", {
                  required: "Email을 입력해주세요.",
                  pattern: {
                    value: /[a-zA-Z0-9_-]+@[a-z]+\.[a-z]{2,4}$/i,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
                type="text"
                id="email"
                className={
                  errors.email
                    ? "bg-red-50 border border-red-500 text-red-800 placeholder-red-700 text-sm rounded-lg block w-full pl-10 p-2.5"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 shadow-md"
                }
                placeholder="Enter email"
              />
            </div>
            <p className="mt-2 text-xs text-red-600">{errors.email?.message}</p>
          </div>
          <div>
            <label
              htmlFor="password"
              className={cls(
                "block mb-2 text-sm font-medium",
                errors.password ? "text-red-800" : "text-gray-900"
              )}
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className={cls(
                    "w-4 h-4",
                    errors.password ? "text-red-800" : "text-gray-500"
                  )}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 22"
                >
                  <path d="M19.7887 4.22031C16.8287 1.27031 12.0287 1.27031 9.08868 4.22031C7.01868 6.27031 6.39868 9.22031 7.19868 11.8203L2.49868 16.5203C2.16868 16.8603 1.93868 17.5303 2.00868 18.0103L2.30868 20.1903C2.41868 20.9103 3.08868 21.5903 3.80868 21.6903L5.98868 21.9903C6.46868 22.0603 7.13868 21.8403 7.47868 21.4903L8.29868 20.6703C8.49868 20.4803 8.49868 20.1603 8.29868 19.9603L6.35868 18.0203C6.06868 17.7303 6.06868 17.2503 6.35868 16.9603C6.64868 16.6703 7.12868 16.6703 7.41868 16.9603L9.36868 18.9103C9.55868 19.1003 9.87868 19.1003 10.0687 18.9103L12.1887 16.8003C14.7787 17.6103 17.7287 16.9803 19.7887 14.9303C22.7387 11.9803 22.7387 7.17031 19.7887 4.22031ZM14.4987 12.0003C13.1187 12.0003 11.9987 10.8803 11.9987 9.50031C11.9987 8.12031 13.1187 7.00031 14.4987 7.00031C15.8787 7.00031 16.9987 8.12031 16.9987 9.50031C16.9987 10.8803 15.8787 12.0003 14.4987 12.0003Z"></path>
                </svg>
              </div>
              <input
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
                type="password"
                id="password"
                className={
                  errors.password
                    ? "bg-red-50 border border-red-500 text-red-800 placeholder-red-700 text-sm rounded-lg block w-full pl-10 p-2.5"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 shadow-md"
                }
                placeholder="Enter password"
              />
            </div>
            <p className="mt-2 text-xs text-red-600">
              {errors.password?.message}
            </p>
          </div>
          {/* <div className="flex items-start mt-1 pl-1">
            <div className="flex items-center h-5">
              <input
                {...register("rememberMe")}
                id="rememberMe"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#1dadf2]"
              />
            </div>
            <label
              htmlFor="rememberMe"
              className="ml-2 text-sm font-medium text-gray-900 select-none"
            >
              Remember me
            </label>
          </div> */}
          <button
            type="submit"
            className="mt-14 text-white bg-[#1dadf2] hover:bg-black font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center shadow-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
