import React from 'react'

import { DashboardPage } from '../../../presentation/pages'
import { currentAccountState } from '../../../presentation/components'
import { useRecoilValue } from 'recoil'

export const makeHomePage: React.FC = () => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  const name = getCurrentAccount().first_name
  return <DashboardPage username={name} />
}
