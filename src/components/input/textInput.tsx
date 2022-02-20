
interface TextInputProps {
  value: string
  onInputChange: (s:string) => void
}

export function TextInput(props: TextInputProps) {
  return <input data-testid="input" value={props.value} onChange={e => props.onInputChange(e.target.value)} />
}