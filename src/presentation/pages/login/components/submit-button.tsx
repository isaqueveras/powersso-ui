import React from 'react'

import { useRecoilValue } from 'recoil'
import { loginState } from './atoms'
import { SubmitButtonBase } from '../../../../presentation/components'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  return <SubmitButtonBase text={text} state={useRecoilValue(loginState)} />
}

export default SubmitButton
