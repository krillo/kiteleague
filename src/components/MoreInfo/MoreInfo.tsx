import React, { useState } from 'react'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import './MoreInfo.scss';

import clsx from 'clsx'

interface IProps {
  handleClick: () => void
}

const MoreInfo = ({ handleClick }: IProps) => {
  const [clicked, setClicked] = useState(false)
  const { data: AlarmRoutineList } = useAlarmGetAlarmRoutines({})
  const alarmRoutine = AlarmRoutineList?.[0]

  const handleChange = () => {
    setClicked((prev) => !prev)
    handleClick()
  }

  return (
    <>
      <div className={classes.info}>
        <div className={classes.txt}>krillo</div>
        <div className={classes.txt}>dillo</div>
      </div>
    </>
  )
}

export default MoreInfo