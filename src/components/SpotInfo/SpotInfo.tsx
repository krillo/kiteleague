import React, { useState } from 'react'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import './SpotInfo.scss';

import clsx from 'clsx'

interface IProps {
  handleClick: () => void
}

const SpotInfo = ({ handleClick }: IProps) => {
  const [clicked, setClicked] = useState(false)
  // const { data: AlarmRoutineList } = useAlarmGetAlarmRoutines({})
  // const alarmRoutine = AlarmRoutineList?.[0]

  const handleChange = () => {
    setClicked((prev) => !prev)
    // handleClick()
  }

  return (
    <>
      <div className="info">
        <div className="txt">krillo</div>
        <div className="txt">dillo</div>
      </div>
    </>
  )
}

export default SpotInfo