import { memo } from 'react'
import { Inputs } from '../..'

type Props = {
  data?: Inputs
}

export const ViewSubmittedData = memo(function (props: Props) {
  const PreformattedText = () => (
    <pre className="overflow-x-auto p-4 rounded text-sm bg-slate-100">
      <code>{JSON.stringify(props.data, null, 2)}</code>
    </pre>
  )
  const DefaultText = () => <div>Not Submitted.</div>

  return (
    <div>
      <h2 className="mb-2 text-xl">Submitted Data</h2>
      {props.data ? <PreformattedText /> : <DefaultText />}
    </div>
  )
})
