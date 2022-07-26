import {
  handleSetPageFooter,
  handleSetPageHeader,
  handleSetPageSidebar,
  useDispatch,
  useEffect,
  withRouter,
} from '../../config'
import FormLogin from './form'

interface props {
    history : any
}
const Login: React.FC<props> = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleSetPageSidebar(false))
    dispatch(handleSetPageHeader(false))
    dispatch(handleSetPageFooter(false))
    return () => {
      dispatch(handleSetPageHeader(true))
      dispatch(handleSetPageSidebar(true))
      dispatch(handleSetPageFooter(true))
    }
    // eslint-disable-next-line
  }, [dispatch])

  const handleSubmit = () => {
      props.history.push("/dashboard");
      window.location.reload();
  };
  return (
    <div className='login-box container' style={{marginTop: '10%'}}>
      <div className='card card-outline card-primary'>
        <div className='card-header text-center'>
          <div className='h1'>
            <b>ADMIN LTE </b>APP
          </div>
        </div>
        <div className='card-body'>
          <p className='login-box-msg'>Sign in to start your session</p>
          <FormLogin onSubmit={()=>handleSubmit()} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
