import React from 'react'
import { StyleSheet } from 'aphrodite/no-important'
import _ from 'lodash'

import X3dScene from '../components/X3dScene'
import SidebarMenu from '../components/SidebarMenu'
import ConfigMenu from '../components/ConfigMenu'
import Title from './Title'
import { fixed } from '../styles/common'

const styles = StyleSheet.create({
  title: {
    ...fixed('bottom', 'right'),
    maxWidth: '50%',
    textAlign: 'right',
  }
})

const Viewer = ({ solid, polyhedron: Polyhedron, sidebar: Sidebar, configForm: ConfigForm }) => (
  <div>
    <X3dScene>
      <Polyhedron solid={solid} />
    </X3dScene>
    <SidebarMenu sidebar={Sidebar} />
    <ConfigMenu configForm={ConfigForm} />
    <Title styles={styles.title}>{ _.capitalize(solid.name) }</Title>
  </div>
)

export default Viewer
