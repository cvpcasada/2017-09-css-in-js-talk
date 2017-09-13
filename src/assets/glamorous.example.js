export default
`const MyDiv = glamorous.div({
  display: 'block',
  '& .bold': { fontWeight: 'bold' },
  '& .one': { color: 'blue' },
  ':hover .two': { color: 'red' }
})
<MyDiv>
  <div className="one bold">is blue-bold!</div>
  <div className="two">hover red!</div>
</MyDiv>
`