import { useState } from "react";
import { TextInput } from "./TextInput";

interface Props {}

export function Header({}: Props) {
  const [inputData, setInputData] = useState('');
  return (
    <div>
      <TextInput.Root>
        <TextInput.Input value={inputData}
          onChange={(e) => setInputData(e.target.value)}/>
      </TextInput.Root>
    </div>
  )
};
