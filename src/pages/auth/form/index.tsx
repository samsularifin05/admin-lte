import {ReanderField, Field, reduxForm, Row, Col, Button} from '../../../config'
import Validate from '../validate'

interface props {
  handleSubmit: any
}
let FormLogin: React.FC<props> = (props) => {
  return (
    <form method='post' onSubmit={props.handleSubmit}>
      <Field
        name='user_id'
        component={ReanderField}
        iconFormGroup='fas fa-envelope'
        formGroup
        placeholder='Silahkan Masukan Userid'
      />
      <Field
        name='password'
        type='password'
        component={ReanderField}
        placeholder='Silahkan Masukan Passwsord'
        iconFormGroup='fas fa-lock'
        formGroup
      />
      <Row>
        <Col size='12'>
          <Button
            loading
            textLoading='Waiting'
            type='submit'
            color='primary'
            block
            title='Sign In'
          />
        </Col>
      </Row>
    </form>
  )
}

interface Props {}

const form = reduxForm<{}, Props>({
  form: 'FormLogin',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  touchOnChange: true,
  enableReinitialize: true,
  validate: Validate,
})(FormLogin)
export default form
