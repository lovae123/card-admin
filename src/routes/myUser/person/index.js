import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Table from './table'
import styles from './index.less'

const Person = ({ person }) => {
  console.log('pdfdfdfadsfdsapersonInfo: ', person)
  const { personInfo } = person
  return (
    <div className="content-inner">
      <Table personality={personInfo} />
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.object,
}

export default connect(({ person }) => ({ person }))(Person)
