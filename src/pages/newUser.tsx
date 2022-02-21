import { Form } from '../components/form/form'

export function NewUser() {
  const handleSubmit = ()=>{ console.log('submit') }
  const pushNotify = () => {console.log('error')}
  return (
    <div>
      <Form userList={[]} onSubmit={handleSubmit} pushNotify={pushNotify} />
    </div>
  )
}