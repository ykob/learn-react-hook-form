import { InputField, InputFieldMulti } from '../../components/ui-parts'

export const PageHome = function () {
  return (
    <div>
      <InputField placeholder="input text" />
      <InputField type="number" defaultValue="0" />
      <InputFieldMulti></InputFieldMulti>
    </div>
  )
}
