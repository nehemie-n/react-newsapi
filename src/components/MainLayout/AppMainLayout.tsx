import img from "../../assets/hero-dark.jpg";
import { AppHeader } from "../AppHeader";
import "./AppMainLayout.scss";

// classNames('foo', { bar: true }); // => 'foo bar'
export const AppMainLayout = ({ children }: { children?: any }) => {
  return (
    <div className="AppLayout">
      {/* Back Imge */}
      <div className="AppLayout_Img">
        <img src={img} alt="" />
      </div>
      {/* Content */}
      <div className="AppLayout_Cont">
        {/*  */}
        <div>
          <AppHeader></AppHeader>
        </div>
        {/*  */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export const AppScreen = ({ children }: { children?: any }) => {
  return <div className="AppScreen">{children}</div>;
};
