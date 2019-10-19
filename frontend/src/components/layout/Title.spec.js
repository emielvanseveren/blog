import React from 'react'
import Title from './Info'

describe('<Title/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      createComponent()
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultProps = {
    date: new Date('10/10/2019'),
    description: 'this is a description',
    postId: 1,
    title: 'this is a title',
    read: 5
  }
  return <Title { ...props } { ...defaultProps}/>
}
