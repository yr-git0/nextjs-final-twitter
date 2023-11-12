import { useForm } from "react-hook-form";
import Introduction from "../components/introduction";
import Tab from "../components/tab";
import { cls } from "../libs/client/utils";
import useMutation from "../libs/client/useMutation";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import Image from "next/image";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors?: string;
}

interface MutationResult {
  ok: boolean;
  type?: string;
  message?: string;
}

export default function SignUp() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [signup, { data }] = useMutation<MutationResult>("/api/users/signup");
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SignupForm>({
    mode: "onChange",
  });

  const onValid = (validForm: SignupForm) => {
    signup(validForm);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/log-in");
  };

  useEffect(() => {
    if (isSubmitSuccessful && data) {
      if (data.ok) {
        setModalOpen(true);
      } else if (!data.ok && data.type) {
        setError("email", {
          type: data.type,
          message: data.message,
        });
      }
    }
  }, [data, isSubmitSuccessful]);
  return (
    <div className="w-full flex">
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            width: "700px",
            height: "550px",
            margin: "auto auto",
            padding: 0,
          },
        }}
        ariaHideApp={false}
      >
        <div className="w-full h-full flex flex-col select-none">
          <div className="h-3/5 bg-[#1da1f2] flex flex-col items-center justify-end">
            <Image
              src="/images/welcome.png"
              width={480}
              height={230}
              className="object-contain"
            />
            <p className="mt-2 text-white font-bold text-5xl">
              Hi, {watch("name")}
            </p>
          </div>
          <div className="flex flex-col items-center font-semibold pt-2">
            <p>You have SIGN UP an account successfully.</p>
            <p>Now you can see what's happening in the world!</p>
            <button
              onClick={handleCloseModal}
              className="absolute bottom-5 text-white bg-[#1dadf2] hover:bg-black font-semibold rounded-lg text-md w-fit px-10 py-2.5 text-center shadow-2xl"
            >
              Login
            </button>
          </div>
        </div>
      </Modal>
      <Introduction />
      <div className="p-32">
        <Tab />
        <form
          onSubmit={handleSubmit(onValid)}
          className="w-80 h-full -mt-5 flex flex-col justify-center gap-3"
        >
          <div>
            <label
              htmlFor="name"
              className={cls(
                "block mb-2 text-sm font-medium",
                errors.name ? "text-red-800" : "text-gray-900"
              )}
            >
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className={cls(
                    "w-4 h-4",
                    errors.name ? "text-red-800" : "text-gray-500"
                  )}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="5 0 56 56"
                >
                  <path d="M12.54,52.05H59.46a2.11,2.11,0,0,0,1.6-.7A1.73,1.73,0,0,0,61.49,50,25.8,25.8,0,0,0,47.9,30.45a16.8,16.8,0,0,1-23.8,0A25.8,25.8,0,0,0,10.51,50a1.75,1.75,0,0,0,.43,1.38A2.11,2.11,0,0,0,12.54,52.05Z"></path>
                  <path d="M25.43,28.6c.27.29.56.56.85.82a14.52,14.52,0,0,0,19.43,0,11.1,11.1,0,0,0,.86-.82c.27-.29.54-.58.79-.89a14.6,14.6,0,1,0-22.72,0C24.89,28,25.16,28.31,25.43,28.6Z"></path>
                </svg>
              </div>
              <input
                {...register("name", {
                  required: "이름을 입력해주세요.",
                })}
                type="text"
                id="name"
                className={
                  errors.name
                    ? "bg-red-50 border border-red-500 text-red-800 placeholder-red-700 text-sm rounded-lg block w-full pl-10 p-2.5"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 shadow-md"
                }
                placeholder="Enter name"
              />
            </div>
            <p className="mt-2 text-xs text-red-600">{errors.name?.message}</p>
          </div>
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
                  minLength: {
                    message: "비밀번호의 길이는 최소 10자리 이상이어야 합니다.",
                    value: 10,
                  },
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
          <div>
            <label
              htmlFor="confirmPassword"
              className={cls(
                "block mb-2 text-sm font-medium",
                errors.confirmPassword ? "text-red-800" : "text-gray-900"
              )}
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className={cls(
                    "w-4 h-4",
                    errors.confirmPassword ? "text-red-800" : "text-gray-500"
                  )}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="2 2 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
                  ></path>
                </svg>
              </div>
              <input
                {...register("confirmPassword", {
                  required: "비밀번호를 입력해주세요.",
                  validate: (val: string) => {
                    if (!errors.password && watch("password") !== val) {
                      return "비밀번호가 일치하지 않습니다.";
                    }
                  },
                })}
                type="password"
                id="confirmPassword"
                className={
                  errors.confirmPassword
                    ? "bg-red-50 border border-red-500 text-red-800 placeholder-red-700 text-sm rounded-lg block w-full pl-10 p-2.5"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 shadow-md"
                }
                placeholder="Enter confirm password"
              />
            </div>
            <p className="mt-2 text-xs text-red-600">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            type="submit"
            className="mt-14 text-white bg-[#1dadf2] hover:bg-black font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center shadow-xl"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
