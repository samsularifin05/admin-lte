import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/RootReducer";

interface props {
    loading? : boolean,
    type : any,
    color : string,
    block?: boolean,
    textLoading ?: string,
    onClick ?: any,
    title : string,
    icon?: string,
}
const Button: React.FC<props> = (props) => {
const isLoading: any = useSelector<RootState>(({loader}) => loader.loading)

  const { icon, title, onClick,textLoading, loading, type, color, block } = props;

  return (
    <button
    //   disabled={loading ? (isLoading.button ? "disabled" : "") : ""}
      type={type}
      onClick={onClick}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"}`}
    >
      {isLoading ? (
        loading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`}></i> 
        )
      ) : (
        title || <i className={`fas ${icon}`}></i> 
      )}
    </button>
  );
};

export default Button;
