import img from "../assets/notfound.svg";
import { AppButton } from "../components/UI/AppButton/AppButton";

export function NotFoundView() {
  return (
    <div>
      <div className="text-center flex flex-col items-center justify-center py-16 gap-8">
        <div className="w-36 text-center">
          <img src={img} alt="" />
        </div>
        <div className="gap-2 flex flex-col">
          <p className="text-2xl">Oops!</p>
          <p className="text-3xl">We also don't know</p>
          <p className="text-6xl font-bold">#What's Up?</p>
        </div>
      </div>
      {/*  */}
      {/* <AppButton>Reset Search</AppButton> */}
      {/*  */}
    </div>
  );
}
